import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple per-instance throttle. Swap for a durable store if traffic grows.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

function str(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many enquiries. Please try again later.' },
      { status: 429 },
    )
  }

  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const body = payload as Record<string, unknown>

  // Honeypot: pretend success so bots do not retry.
  if (str(body.company, 100)) {
    return NextResponse.json({ ok: true })
  }

  const name = str(body.name, 100)
  const email = str(body.email, 200)
  const phone = str(body.phone, 30)
  const treatment = str(body.treatment, 100)
  const message = str(body.message, 2000)

  if (!name || (email && !EMAIL_RE.test(email)) || (!email && !phone)) {
    return NextResponse.json(
      { error: 'Please provide your name and either a valid email address or a phone number.' },
      { status: 400 },
    )
  }

  if (!treatment && !message) {
    return NextResponse.json(
      { error: 'Please select a treatment or add a message.' },
      { status: 400 },
    )
  }

  const lines = [
    `Name: ${name}`,
    email && `Email: ${email}`,
    phone && `Phone: ${phone}`,
    `Treatment: ${treatment || 'Not sure — advise me'}`,
    '',
    message || '(no message)',
  ].filter(Boolean) as string[]

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ENQUIRY_TO_EMAIL
  const from = process.env.ENQUIRY_FROM_EMAIL

  if (!apiKey || !to || !from) {
    // Email delivery not configured yet — accept the enquiry and log it.
    console.info('[enquiry] (email not configured)\n' + lines.join('\n'))
    return NextResponse.json({ ok: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      ...(email && { reply_to: email }),
      subject: `New enquiry — ${name}`,
      html: `<pre style="font:14px/1.6 system-ui">${escapeHtml(lines.join('\n'))}</pre>`,
    }),
  })

  if (!res.ok) {
    console.error('[enquiry] delivery failed', res.status, await res.text())
    return NextResponse.json(
      { error: 'We could not send your enquiry. Please call us instead.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
