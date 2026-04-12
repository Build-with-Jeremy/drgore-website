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
      replyTo: email,
      subject: `New Contact Form Inquiry from ${escapeHtml(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2b4a6b; border-bottom: 2px solid #2b4a6b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 80px;">Name:</td>
              <td style="padding: 10px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2b4a6b;">${escapeHtml(email)}</a></td>
            </tr>
            ${sanitizedPhone ? `<tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px 0;"><a href="tel:${sanitizedPhone}" style="color: #2b4a6b;">${sanitizedPhone}</a></td>
            </tr>` : ''}
          </table>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">
            Submitted via drgore.com contact form
          </p>
        </div>
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
