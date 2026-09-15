import type { Metadata } from 'next'
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
            <div className="flex items-baseline justify-between gap-6 flex-wrap mb-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium">
                {group.title}
              </h2>
              <span className="text-[10px] tracking-luxe uppercase text-foreground/40">
                Incl. VAT
              </span>
            </div>
            {group.note ? (
              <p className="text-sm font-light text-accent mb-6">{group.note}</p>
            ) : (
              <div className="mb-6" />
            )}

            <ul className="divide-y">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <div>
                    <div className="font-light">{item.name}</div>
                    <div className="text-[10px] tracking-widest uppercase text-foreground/45 mt-1">
                      {item.duration}
                    </div>
                  </div>
                  <div className="font-serif text-xl whitespace-nowrap">
                    {item.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-surface rounded-3xl p-8 sm:p-10">
          <h2 className="font-serif text-2xl mb-4">Good to know</h2>
          <ul className="space-y-3 text-sm font-light text-foreground/65 leading-relaxed">
            <li>
              · Durations and prices shown as &quot;TBC&quot; are still being
              confirmed by the studio.
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
