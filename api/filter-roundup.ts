import type { VercelRequest, VercelResponse } from '@vercel/node';
import { del, get, list } from '@vercel/blob';
import { Resend } from 'resend';
import { escapeHtml, type Submission, type Verdict } from './_contact-filter.js';

/*
 * Weekly roundup of contact-form submissions the filter held [WI:bd168620].
 *
 * Vercel Cron calls this Mondays 13:00 UTC (vercel.json): 9am Eastern in
 * summer, 8am in winter. It covers BOTH sites, because the one private Blob
 * store is connected to both projects. Zero held = no email.
 *
 * It also enforces retention: held blobs older than 90 days are deleted.
 *
 * `?preview=1` sends the same email to Jeremy only and deletes nothing, so the
 * roundup can be checked without mailing Dave.
 */

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const RETENTION_MS = 90 * 24 * 60 * 60 * 1000;

type Held = Submission & Verdict;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const preview = req.query.preview === '1';

  try {
    const now = Date.now();
    const recent: Held[] = [];
    const expired: string[] = [];

    let cursor: string | undefined;
    do {
      const page = await list({ prefix: 'filtered/', cursor, limit: 1000 });
      for (const blob of page.blobs) {
        const age = now - new Date(blob.uploadedAt).getTime();
        if (age > RETENTION_MS) {
          expired.push(blob.url);
        } else if (age <= WEEK_MS) {
          const result = await get(blob.pathname, { access: 'private' });
          if (result?.statusCode === 200) {
            recent.push(JSON.parse(await new Response(result.stream).text()));
          }
        }
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);

    if (!preview && expired.length) await del(expired);

    if (recent.length === 0) {
      return res.status(200).json({ sent: false, held: 0, deleted: preview ? 0 : expired.length });
    }

    recent.sort((a, b) => a.received_at.localeCompare(b.received_at));
    const count = `${recent.length} message${recent.length === 1 ? '' : 's'}`;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sent = await resend.emails.send({
      from: 'Website contact forms <noreply@mail.buildwithjeremy.com>',
      to: preview ? ['jeremy@buildwithjeremy.com'] : ['dave@drgore.com'],
      bcc: preview ? undefined : ['jeremy@buildwithjeremy.com'],
      // "Reply and tell me" has to reach a person, not the noreply sender.
      replyTo: 'jeremy@buildwithjeremy.com',
      subject: `${preview ? '[Preview] ' : ''}Filtered out this week: ${count}`,
      html: roundupHtml(recent),
    });
    if (sent.error) {
      console.error('filter-roundup: send failed', sent.error);
      return res.status(500).json({ error: 'Send failed' });
    }

    return res.status(200).json({ sent: true, preview, held: recent.length, deleted: preview ? 0 : expired.length });
  } catch (error) {
    console.error('filter-roundup failed', error);
    return res.status(500).json({ error: 'Roundup failed' });
  }
}

function roundupHtml(items: Held[]): string {
  const cards = items
    .map((h) => {
      const date = new Date(h.received_at).toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric', timeZone: 'America/New_York',
      });
      const contact = [h.email, h.phone].filter(Boolean).map(escapeHtml).join(' · ');
      return `
  <div style="border:1px solid #e5e5e5;border-radius:6px;padding:16px;margin:0 0 16px;">
    <p style="margin:0 0 4px;font-size:13px;color:#777;">${date} · ${escapeHtml(h.site)}</p>
    <p style="margin:0 0 4px;font-size:16px;font-weight:bold;">${escapeHtml(h.name)}</p>
    <p style="margin:0 0 8px;font-size:14px;">${contact}</p>
    <p style="margin:0 0 12px;font-size:14px;color:#555;font-style:italic;">Why it was filtered: ${escapeHtml(h.reason)}</p>
    <div style="background:#f7f7f7;padding:12px;border-radius:4px;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(h.message)}</div>
  </div>`;
    })
    .join('');

  return `
<div style="font-family:Arial,sans-serif;max-width:600px;color:#222;">
  <p style="font-size:15px;line-height:1.5;">These came in through your website contact forms this week and got filtered out as sales pitches or spam. You did not get them at the time.</p>
  <p style="font-size:15px;line-height:1.5;">If one of them is a real client, reply and tell me.</p>
  ${cards}
  <p style="font-size:12px;color:#888;">Jeremy Pittman, Build with Jeremy</p>
</div>`;
}
