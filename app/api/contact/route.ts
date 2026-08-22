type ContactPreference = 'email' | 'line' | 'either';

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  jobTitle?: unknown;
  email?: unknown;
  lineId?: unknown;
  contactPreference?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const limits = {
  name: 80,
  company: 120,
  jobTitle: 120,
  email: 160,
  lineId: 80,
  subject: 160,
  message: 2000,
};

const rateWindowMs = 60_000;
const maxRequestsPerWindow = 30;
const rateMap = new Map<string, { count: number; resetAt: number }>();

function json(body: unknown, status: number) {
  return Response.json(body, {
    status,
    headers: {
      'cache-control': 'no-store',
    },
  });
}

function field(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function clientKey(request: Request) {
  return (
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'local'
  );
}

function rateLimited(request: Request) {
  const key = clientKey(request);
  const now = Date.now();
  const current = rateMap.get(key);
  if (!current || current.resetAt <= now) {
    rateMap.set(key, { count: 1, resetAt: now + rateWindowMs });
    return false;
  }
  current.count += 1;
  return current.count > maxRequestsPerWindow;
}

function emailLooksValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function deliverContactMessage(message: Record<string, string>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return { ok: false, reason: 'delivery_not_configured' };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      to: 'alextsou888@gmail.com',
      source: 'alextsou.com',
      ...message,
    }),
  });

  return { ok: response.ok, reason: response.ok ? 'sent' : 'delivery_failed' };
}

export async function POST(request: Request) {
  if (rateLimited(request)) return json({ ok: false, error: 'rate_limited' }, 429);

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'malformed_json' }, 400);
  }

  const honeypot = field(payload.website, 120);
  if (honeypot) return json({ ok: false, error: 'spam_rejected' }, 400);

  const contactPreference = field(payload.contactPreference, 20) as ContactPreference;
  const data = {
    name: field(payload.name, limits.name),
    company: field(payload.company, limits.company),
    jobTitle: field(payload.jobTitle, limits.jobTitle),
    email: field(payload.email, limits.email),
    lineId: field(payload.lineId, limits.lineId),
    contactPreference: ['email', 'line', 'either'].includes(contactPreference) ? contactPreference : 'either',
    subject: field(payload.subject, limits.subject),
    message: field(payload.message, limits.message),
    timestamp: new Date().toISOString(),
    source: 'alextsou.com',
  };

  const errors: Record<string, string> = {};
  if (!data.email && !data.lineId) errors.contact = 'email_or_line_required';
  if (data.email && !emailLooksValid(data.email)) errors.email = 'invalid_email';
  if (!data.message) errors.message = 'message_required';

  if (Object.keys(errors).length > 0) return json({ ok: false, errors }, 400);

  const delivery = await deliverContactMessage(data);
  if (!delivery.ok) return json({ ok: false, error: delivery.reason }, 503);

  return json({ ok: true }, 200);
}
