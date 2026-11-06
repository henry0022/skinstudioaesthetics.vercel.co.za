import Link from 'next/link'

export function CtaBand({
  eyebrow = 'Reservations',
  title = 'Ready when you are',
  description = 'Send an enquiry and our team will confirm your appointment. New guests receive a complimentary skin reading.',
  variant = 'card',
}: {
  eyebrow?: string
  title?: string
  description?: string
  variant?: 'card' | 'plain'
}) {
  return (
    <section
      className={
        variant === 'plain'
          ? 'max-w-6xl mx-auto px-6 py-24'
          : 'max-w-6xl mx-auto px-6 pb-24'
      }
    >
      <div
        className={
          variant === 'plain'
            ? 'text-center max-w-2xl mx-auto'
            : 'bg-primary text-ink rounded-[2.5rem] px-8 py-14 sm:px-14 sm:py-16 text-center'
        }
      >
        <span
          className={`inline-block text-[11px] tracking-luxe uppercase mb-5 ${
            variant === 'plain' ? 'text-accent' : 'text-ink/70'
          }`}
        >
          {eyebrow}
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-5 text-balance">
          {title}
        </h2>
        <p
          className={`font-light leading-relaxed mx-auto mb-9 text-pretty ${
            variant === 'plain'
              ? 'text-foreground/65 max-w-lg'
              : 'text-ink/75 max-w-lg'
          }`}
        >
          {description}
        </p>
        <Link
          href="/contact"
          className={
            variant === 'plain'
              ? 'text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors'
              : 'inline-block bg-ink text-background px-8 py-4 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg'
          }
        >
          Make an Enquiry
        </Link>
      </div>
    </section>
  )
}
