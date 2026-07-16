import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name, email, phone, instagram, birthdate, birthtime,
      birthplace, service, contact_method, message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a2e;">
        <h2 style="color: #8B6914; border-bottom: 1px solid #e2c88c; padding-bottom: 8px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 6px 0; color: #555; width: 180px;">Name</td><td style="padding: 6px 0; font-weight: bold;">${name}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Email</td><td style="padding: 6px 0;">${email}</td></tr>
          ${phone ? `<tr><td style="padding: 6px 0; color: #555;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>` : ''}
          ${instagram ? `<tr><td style="padding: 6px 0; color: #555;">Instagram</td><td style="padding: 6px 0;">${instagram}</td></tr>` : ''}
          <tr><td style="padding: 6px 0; color: #555;">Birth Date</td><td style="padding: 6px 0;">${birthdate || '—'}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Birth Time</td><td style="padding: 6px 0;">${birthtime || 'Unknown'}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Birth Place</td><td style="padding: 6px 0;">${birthplace || '—'}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Service Interest</td><td style="padding: 6px 0;">${service || '—'}</td></tr>
          <tr><td style="padding: 6px 0; color: #555;">Preferred Contact</td><td style="padding: 6px 0;">${contact_method || '—'}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f9f6ef; border-left: 3px solid #cbaa68;">
          <p style="margin: 0; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="margin: 8px 0 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 24px; font-size: 11px; color: #aaa;">Sent from saratheastrologer.com contact form</p>
      </div>
    `;

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Sara the Astrologer Website', email: 'no-reply@saratheastrologer.com' },
        to: [{ email: 'sara.the.astrologer@gmail.com', name: 'Sara Wigle' }],
        replyTo: { email, name },
        subject: `New inquiry from ${name} — ${service || 'General'}`,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Brevo error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
