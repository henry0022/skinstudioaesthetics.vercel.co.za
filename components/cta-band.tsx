import Link from 'next/link'

export function CtaBand({
  eyebrow = 'Reservations',
  title = 'Ready when you are',
  description = 'Send an enquiry and our team will confirm your appointment. New guests receive a complimentary skin reading.',
}: {
  eyebrow?: string
  title?: string
  description?: string
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-primary text-ink rounded-[2.5rem] px-8 py-14 sm:px-14 sm:py-16 text-center">
        <span className="inline-block text-[11px] tracking-luxe uppercase text-ink/70 mb-5">
          {eyebrow}
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-5 text-balance">
          {title}
        </h2>
        <p className="text-ink/75 font-light leading-relaxed max-w-lg mx-auto mb-9 text-pretty">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-ink text-background px-8 py-4 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Make an Enquiry
        </Link>
      </div>
    </section>
  )
}
