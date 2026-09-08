import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { treatmentCategories, treatments } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Skin Treatments',
  description:
    'Facials, peels, micro-needling and finishing touches — every Skin Studio Aesthetics treatment starts with a reading of your skin.',
}

export default function TreatmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skin Treatments"
        title="Treatments, thoughtfully composed"
        description="Every service begins with a reading of your skin, so results feel effortless and entirely your own."
      />

      <nav className="border-b bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] tracking-luxe uppercase text-foreground/60">
          {treatmentCategories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-accent transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
      </nav>

      {treatmentCategories.map((category) => (
        <section
          key={category}
          id={category.toLowerCase().replace(/\s+/g, '-')}
          className="max-w-6xl mx-auto px-6 py-16 md:py-20 scroll-mt-32"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-10">
            {category}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {treatments
              .filter((t) => t.category === category)
              .map((treatment) => (
                <article
                  key={treatment.slug}
                  className="bg-surface rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(20,58,66,0.3)]"
                >
                  <div className="ph h-44">Treatment Image</div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif text-2xl">{treatment.name}</h3>
                      <span className="text-[10px] tracking-widest uppercase text-foreground/45 whitespace-nowrap mt-2">
                        {treatment.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/65 font-light mb-4">
                      {treatment.summary}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/50 font-light mb-6">
                      {treatment.detail}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t mt-auto">
                      <span className="font-serif text-xl">
                        {treatment.price}
                      </span>
                      <Link
                        href="/contact"
                        className="text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors"
                      >
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-surface rounded-3xl p-9 sm:p-12">
          <h2 className="font-serif text-2xl mb-4">Before you book</h2>
          <ul className="space-y-3 text-sm font-light text-foreground/65 leading-relaxed">
            <li>
              · New guests receive a complimentary skin reading before any
              treatment.
            </li>
            <li>
              · Advanced treatments require a patch test at least 48 hours
              beforehand.
            </li>
            <li>
              · Please avoid retinoids and exfoliating acids for five days
              before peels or needling.
            </li>
            <li>
              · Full pricing is on the{' '}
              <Link href="/price-list" className="text-accent hover:text-ink transition-colors">
                price list
              </Link>
              .
            </li>
          </ul>
        </div>
      </section>

      <CtaBand title="Find your treatment" />
    </>
  )
}
