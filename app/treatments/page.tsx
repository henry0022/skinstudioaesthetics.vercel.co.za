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
          {treatments.map((treatment) => {
            const cover = treatment.images[0]
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="ph h-44">Treatment Image</div>
                )}
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
                      href={`/contact?treatment=${treatment.slug}`}
                      className="text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors"
                    >
                      Enquire →
                    </Link>
                  </div>
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
