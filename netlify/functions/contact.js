import { disposableEmailDomains } from '../../src/data/disposable-email-domains.js';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async (req, context) => {
  if (req.method !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid JSON.' });
  }

  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim().toLowerCase();
  const message = String(payload.message || '').trim();
  const turnstileToken = String(payload.turnstileToken || '');
  const honeypot = String(payload.botField || '');

  if (honeypot) {
    return json(200, { success: true });
  }

  if (!name || !email || !message) {
    return json(400, { error: 'All fields are required.' });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return json(400, { error: 'One of the fields is too long.' });
  }
  if (!EMAIL_REGEX.test(email)) {
    return json(400, { error: 'That email address does not look valid.' });
  }
  const domain = email.split('@')[1];
  if (disposableEmailDomains.has(domain)) {
    return json(400, { error: 'Please use a non-disposable email address.' });
  }

  if (!turnstileToken) {
    return json(400, { error: 'Human verification failed. Please reload and try again.' });
  }
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not configured.');
    return json(500, { error: 'Server misconfiguration. Please email me directly instead.' });
  }

  const remoteIp =
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    '';

  let verifyData;
  try {
    const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: turnstileToken,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
    });
    verifyData = await verifyRes.json();
  } catch (err) {
    console.error('Turnstile verify request failed:', err);
    return json(502, { error: 'Could not reach human verification. Try again in a moment.' });
  }

  if (!verifyData?.success) {
    console.warn('Turnstile verification rejected:', verifyData?.['error-codes']);
    return json(400, { error: 'Human verification failed. Please try again.' });
  }

  const siteUrl = process.env.URL || 'https://ries.live';
  const formBody = new URLSearchParams({
    'form-name': 'contact',
    'bot-field': '',
    name,
    email,
    message,
  });

  try {
    const submitRes = await fetch(`${siteUrl}/__forms.html`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody,
    });
    if (!submitRes.ok && submitRes.status !== 303) {
      console.error('Netlify Forms submit failed:', submitRes.status, await submitRes.text());
      return json(502, { error: 'Could not deliver your message. Please email me directly.' });
    }
  } catch (err) {
    console.error('Netlify Forms submit threw:', err);
    return json(502, { error: 'Could not deliver your message. Please email me directly.' });
  }

  return json(200, { success: true });
};

export const config = {
  path: '/api/contact',
};
