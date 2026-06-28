import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter (resets on server restart)
const submissionCache = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 submission per IP per minute

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
    const last = submissionCache.get(ip) ?? 0;
    if (Date.now() - last < RATE_LIMIT_MS) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    submissionCache.set(ip, Date.now());

    const body = await req.json();
    const { name, email, businessName, businessType, projectType, budget, message, lang } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL ?? gmailUser;

    if (!gmailUser || !gmailPass) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    const submittedAt = new Date().toLocaleString('en-CH', { timeZone: 'Europe/Zurich' });

    await transporter.sendMail({
      from: `"Nexova Website" <${gmailUser}>`,
      to: contactEmail,
      subject: `New Nexova lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <h2 style="color: #1e40af; margin-bottom: 24px;">New Lead — Nexova Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 40%;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Business name</td><td style="padding: 8px 0; color: #1e293b;">${businessName || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Business type</td><td style="padding: 8px 0; color: #1e293b;">${businessType || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Project type</td><td style="padding: 8px 0; color: #1e293b;">${projectType || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Budget</td><td style="padding: 8px 0; color: #1e293b;">${budget || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Language</td><td style="padding: 8px 0; color: #1e293b;">${lang?.toUpperCase() || 'EN'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Submitted at</td><td style="padding: 8px 0; color: #1e293b;">${submittedAt}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="color: #64748b; margin: 0 0 8px;">Message</p>
            <p style="color: #1e293b; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
