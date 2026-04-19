import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Lazy initialization — env vars injected at runtime by Vercel
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  _honeypot?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, _honeypot }: ContactFormData = req.body;

    // Honeypot spam check — if filled, it's a bot
    if (_honeypot) {
      return res.status(200).json({ ok: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Field length limits
    if (name.length > 100 || email.length > 255 || message.length > 5000) {
      return res.status(400).json({ error: 'One or more fields exceed the maximum length.' });
    }

    const sanitizedPhone = phone ? phone.replace(/[^\d\s\-\+\(\)\.]/g, '').slice(0, 20) : '';

    const resend = getResend();
    const emailResponse = await resend.emails.send({
      from: 'Dr. David Gore <noreply@drgore.com>',
      to: ['dave@drgore.com'],
      cc: ['jeremy@buildwithjeremy.com'],
      replyTo: email,
      subject: `New Message from ${escapeHtml(name)} — drgore.com`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background-color:#1a3a5c;padding:28px 36px;">
            <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#ffffff;font-weight:bold;letter-spacing:0.5px;">Dr. David Gore</p>
            <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#a8c4d8;letter-spacing:1px;text-transform:uppercase;">New Contact Form Submission</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px;">

            <!-- Contact details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;margin-bottom:28px;">
              <tr style="background-color:#f9f9f9;">
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;width:90px;">Name</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;">${escapeHtml(name)}</td>
              </tr>
              <tr style="border-top:1px solid #e8e8e8;">
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Email</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#1a3a5c;text-decoration:none;">${escapeHtml(email)}</a></td>
              </tr>
              ${sanitizedPhone ? `<tr style="border-top:1px solid #e8e8e8;">
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Phone</td>
                <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:15px;"><a href="tel:${sanitizedPhone}" style="color:#1a3a5c;text-decoration:none;">${sanitizedPhone}</a></td>
              </tr>` : ''}
            </table>

            <!-- Message -->
            <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:0.8px;">Message</p>
            <div style="background-color:#f9f9f9;border:1px solid #e8e8e8;border-left:4px solid #1a3a5c;border-radius:4px;padding:20px 20px 20px 16px;">
              <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </div>

            <!-- Reply CTA -->
            <table cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
              <tr>
                <td style="background-color:#1a3a5c;border-radius:4px;">
                  <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:12px 24px;font-family:Arial,sans-serif;font-size:14px;color:#ffffff;text-decoration:none;font-weight:bold;">Reply to ${escapeHtml(name)}</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f9f9f9;border-top:1px solid #e8e8e8;padding:16px 36px;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#aaa;">Submitted via <a href="https://drgore.com/contact" style="color:#1a3a5c;text-decoration:none;">drgore.com/contact</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again or call directly.' });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
