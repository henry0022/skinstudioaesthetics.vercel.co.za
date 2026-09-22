import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { priceList } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Price List',
  description:
    'Treatment pricing at Skin Studio Aesthetics in Cape Town.',
}

export default function PriceListPage() {
  return (
    <>
      <PageIntro
        eyebrow="Price List"
        title="Clear pricing, no surprises"
        description="Prices are a guide — your final quote is confirmed at your complimentary skin reading."
      />

      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24 space-y-16">
        {priceList.map((group) => (
          <div key={group.title}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium">
                {group.title}
              </h2>
            </div>
            {group.note ? (
              <p className="text-sm font-light text-accent mb-6">{group.note}</p>
            ) : (
              <div className="mb-6" />
            )}

            <div className="space-y-8">
              {group.items.map((item) => (
                <article key={item.slug} className="border-b pb-8 last:border-b-0">
                  <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
                    <div>
                      <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">
                        {item.category}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    <Link
                      href={`/contact?treatment=${item.slug}`}
                      className="text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors whitespace-nowrap"
                    >
                      Enquire →
                    </Link>
                  </div>

                  <div className="divide-y">
                    {item.pricing.options.map((option) => (
                      <div key={option.label} className="flex items-start justify-between gap-6 py-3">
                        <span className="text-sm font-light">{option.label}</span>
                        <span className="font-serif text-lg whitespace-nowrap">{option.price}</span>
                      </div>
                    ))}
                    {item.pricing.packages?.length ? (
                      <div className="pt-4">
                        <h4 className="text-[10px] tracking-luxe uppercase text-foreground/45 mb-2">
                          Packages
                        </h4>
                        {item.pricing.packages.map((option) => (
                          <div key={option.label} className="flex items-start justify-between gap-6 py-2">
                            <span className="text-sm font-light">{option.label}</span>
                            <span className="font-serif text-lg whitespace-nowrap">{option.price}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {item.pricing.addOns?.length ? (
                      <div className="pt-4">
                        <h4 className="text-[10px] tracking-luxe uppercase text-foreground/45 mb-2">
                          Add-ons
                        </h4>
                        {item.pricing.addOns.map((option) => (
                          <div key={option.label} className="flex items-start justify-between gap-6 py-2">
                            <span className="text-sm font-light">{option.label}</span>
                            <span className="font-serif text-lg whitespace-nowrap">{option.price}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {item.pricing.note ? (
                    <p className="text-sm font-light text-accent mt-4">{item.pricing.note}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-surface rounded-3xl p-8 sm:p-10">
          <h2 className="font-serif text-2xl mb-4">Good to know</h2>
          <ul className="space-y-3 text-sm font-light text-foreground/65 leading-relaxed">
            <li>
              · Enquire with the studio for treatment details or pricing where
              the price list says &quot;Enquire for pricing&quot; or &quot;Price on request&quot;.
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Reservations"
        title="Secure your slot"
        description="Send an enquiry with your preferred treatment and days, and we will confirm availability."
      />
    </>
  )
}
