export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b bg-muted">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20 text-center animate-fade-up">
        <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-5">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-balance max-w-3xl mx-auto">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 text-foreground/65 font-light leading-relaxed max-w-xl mx-auto text-pretty">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
