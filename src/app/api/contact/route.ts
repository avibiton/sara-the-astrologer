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

    // Confirmation email to the visitor
    const confirmationHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a2e; background: #090A1A; padding: 40px 32px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <p style="color: #CBAA68; letter-spacing: 4px; font-size: 11px; text-transform: uppercase; margin: 0 0 12px;">Sara the Astrologer</p>
          <h1 style="color: #F6F0E7; font-size: 28px; font-weight: 300; margin: 0; line-height: 1.3;">Your message has been received</h1>
        </div>
        <div style="border-top: 1px solid rgba(203,170,104,0.2); border-bottom: 1px solid rgba(203,170,104,0.2); padding: 24px 0; margin-bottom: 28px;">
          <p style="color: #B8A8C7; line-height: 1.7; margin: 0;">
            Hi ${name},<br><br>
            Thank you for reaching out. Sara has received your message and will be in touch with you soon.
          </p>
        </div>
        <p style="color: #6B5A80; font-size: 13px; line-height: 1.7; margin: 0 0 24px;">
          In the meantime, you're welcome to explore Sara's readings and insights at
          <a href="https://saratheastrologer.com" style="color: #CBAA68; text-decoration: none;">saratheastrologer.com</a>,
          or follow along on Instagram at
          <a href="https://www.instagram.com/sara_the_astrologer/" style="color: #CBAA68; text-decoration: none;">@sara_the_astrologer</a>.
        </p>
        <div style="text-align: center; margin-top: 32px;">
          <a href="https://calendly.com/sara-the-astrologer/60min" style="display: inline-block; padding: 12px 32px; background: linear-gradient(135deg, #CBAA68, #E2C88C); color: #090A1A; text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600;">Book a Session</a>
        </div>
        <p style="color: #3A2D4A; font-size: 11px; text-align: center; margin-top: 32px;">
          © ${new Date().getFullYear()} Sara the Astrologer · Sara Wigle
        </p>
      </div>
    `;

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Sara the Astrologer', email: 'no-reply@saratheastrologer.com' },
        to: [{ email, name }],
        subject: 'Your message has been received — Sara the Astrologer',
        htmlContent: confirmationHtml,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
