'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { treatments } from '@/lib/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState<string | null>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const searchParams = useSearchParams()
  const preselectedTreatment =
    treatments.find((t) => t.slug === searchParams.get('treatment'))?.name ?? ''

  function fillDefaultMessage(treatment: string) {
    const textarea = messageRef.current
    if (treatment && textarea && !textarea.value.trim()) {
      textarea.value = `I would like to enquire about availability for ${treatment}.`
    }
  }

  useEffect(() => {
    fillDefaultMessage(preselectedTreatment)
    // Only run for the treatment resolved from the URL on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preselectedTreatment])

  function handleTreatmentChange(event: React.ChangeEvent<HTMLSelectElement>) {
    fillDefaultMessage(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (!String(data.name ?? '').trim()) {
      setValidationError('Please tell us your name.')
      return
    }

    if (!String(data.email ?? '').trim() && !String(data.phone ?? '').trim()) {
      setValidationError('Please provide an email address or a phone number.')
      return
    }

    const treatment = String(data.treatment ?? '').trim()
    const messageText = String(data.message ?? '').trim()

    if (!treatment && !messageText) {
      setValidationError('Please select a treatment or add a message.')
      return
    }

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
    <>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
          Email (or phone below)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={200}
          autoComplete="email"
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone (or email above)
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
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <label htmlFor="treatment" className={`${labelClass} mb-0`}>
            Treatment
          </label>
          <Link
            href="/treatments"
            className="text-[11px] tracking-luxe uppercase text-accent hover:text-ink transition-colors whitespace-nowrap"
          >
            View menu
          </Link>
        </div>
        <select
          id="treatment"
          name="treatment"
          className={fieldClass}
          defaultValue={preselectedTreatment}
          onChange={handleTreatmentChange}
        >
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
          ref={messageRef}
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

      {validationError ? (
        <div
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="enquiry-validation-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-6"
        >
          <div className="bg-background rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h2
              id="enquiry-validation-title"
              className="font-serif text-xl font-medium mb-3"
            >
              Almost there
            </h2>
            <p className="text-sm font-light text-foreground/70 mb-6">
              {validationError}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setValidationError(null)}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Okay
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
