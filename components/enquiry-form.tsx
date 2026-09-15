'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { treatments } from '@/lib/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const searchParams = useSearchParams()
  const preselectedTreatment =
    treatments.find((t) => t.slug === searchParams.get('treatment'))?.name ?? ''

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    setMessage('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = (await res.json()) as { error?: string }

      if (!res.ok) {
        setStatus('error')
        setMessage(body.error ?? 'Something went wrong. Please try again.')
        return
      }

      form.reset()
      setStatus('sent')
      setMessage('Thank you — we will be in touch shortly to confirm.')
    } catch {
      setStatus('error')
      setMessage('We could not send your enquiry. Please try again.')
    }
  }

  const fieldClass =
    'w-full bg-transparent border-b border-foreground/25 py-2.5 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/30'
  const labelClass =
    'block text-[11px] tracking-luxe uppercase text-foreground/60 mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot — hidden from users, catches naive bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          placeholder="+27 …"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="treatment" className={labelClass}>
          Treatment
        </label>
        <select id="treatment" name="treatment" className={fieldClass} defaultValue={preselectedTreatment}>
          <option value="">Not sure — advise me</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Tell us a little about your skin and preferred days"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-primary-foreground py-4 rounded-full text-xs tracking-luxe uppercase mt-2 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>

      <p
        aria-live="polite"
        className={`text-sm font-light min-h-5 ${
          status === 'error' ? 'text-red-700' : 'text-accent'
        }`}
      >
        {message}
      </p>
    </form>
  )
}
