import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { treatments } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Skin Treatments',
  description:
    'The treatment menu at Skin Studio Aesthetics in Cape Town, including facials, peels and advanced skin technologies.',
}

export default function TreatmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skin Treatments"
        title="Treatments, thoughtfully composed"
        description="Every service begins with a reading of your skin, so results feel effortless and entirely your own."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => {
            const cover = treatment.images[0]
            const description = (
              <div className="space-y-3 text-sm leading-relaxed text-foreground/50 font-light mb-6">
                {treatment.description.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {treatment.description.lists?.map((list) => (
                  <div key={list.heading}>
                    {list.heading ? (
                      <h4 className="text-xs text-foreground/65 mb-2">{list.heading}</h4>
                    ) : null}
                    <ul className="list-disc pl-5 space-y-1">
                      {list.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )
            return (
              <article
                key={treatment.slug}
                className="bg-surface rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(20,58,66,0.3)]"
              >
                {cover ? (
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="ph w-full aspect-[3/4]">Image coming soon</div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-[10px] tracking-luxe uppercase text-accent">
                      {treatment.category}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight mt-2">
                      {treatment.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/65 font-light mb-4">
                    {treatment.summary}
                  </p>
                  {treatment.slug === 'bioneedling-spicule-algae' ? (
                    <details className="mb-6 group">
                      <summary className="cursor-pointer list-none text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors">
                        Read treatment details
                      </summary>
                      <div className="pt-4">{description}</div>
                    </details>
                  ) : (
                    description
                  )}
                  <div className="space-y-2 mb-6">
                    {treatment.pricing.options.map((option) => (
                      <div key={option.label} className="flex justify-between gap-4 text-sm">
                        <span className="text-foreground/60">{option.label}</span>
                        <span className="font-serif whitespace-nowrap">{option.price}</span>
                      </div>
                    ))}
                    {treatment.pricing.packages?.map((option) => (
                      <div key={option.label} className="flex justify-between gap-4 text-sm">
                        <span className="text-foreground/60">{option.label}</span>
                        <span className="font-serif whitespace-nowrap">{option.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t mt-auto gap-4">
                    <span className="text-xs text-foreground/55">
                      {treatment.pricing.options.length + (treatment.pricing.packages?.length ?? 0) > 1
                        ? 'Multiple options'
                        : treatment.pricing.options[0]?.price ?? 'Enquire for pricing'}
                    </span>
                    <Link
                      href={`/contact?treatment=${treatment.slug}`}
                      className="text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors whitespace-nowrap"
                    >
                      Enquire →
                    </Link>
                  </div>
                  {treatment.pricing.addOns?.length ? (
                    <p className="text-xs text-foreground/50 mt-4">
                      Add-ons available
                    </p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-surface rounded-3xl p-9 sm:p-12">
          <h2 className="font-serif text-2xl mb-4">Before you book</h2>
          <ul className="space-y-3 text-sm font-light text-foreground/65 leading-relaxed">
            <li>
              · New guests receive a complimentary skin reading before any
              treatment.
            </li>
            <li>
              · Any consultation requirements will be confirmed with you when
              you book.
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
