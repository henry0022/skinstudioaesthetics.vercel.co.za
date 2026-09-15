import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { productHouses } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Product Houses',
  description:
    'The skincare brands retailed at Skin Studio Aesthetics.',
}

export default function ProductHousesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Product Houses"
        title="The brands we trust enough to retail"
        description="We stock a short, deliberate list. Each house earns its place through formulation quality, transparency and results we can see on the bed."
      />

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {productHouses.map((house) => (
            <article
              key={house.name}
              className="bg-surface rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(20,58,66,0.3)]"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-serif text-3xl">{house.name}</h2>
                <span className="text-[10px] tracking-luxe uppercase text-foreground/45 whitespace-nowrap mt-2">
                  {house.origin}
                </span>
              </div>
              <span className="inline-block self-start text-[10px] tracking-luxe uppercase text-accent border border-accent/30 rounded-full px-3 py-1 mb-5">
                {house.focus}
              </span>
              <p className="text-sm font-light leading-relaxed text-foreground/65 mb-7">
                {house.description}
              </p>
              <div className="mt-auto pt-6 border-t">
                <div className="text-[10px] tracking-luxe uppercase text-foreground/45 mb-3">
                  Hero products
                </div>
                <ul className="flex flex-wrap gap-2">
                  {house.hero.map((product) => (
                    <li
                      key={product}
                      className="text-xs font-light bg-background rounded-full px-4 py-2"
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-5">
            Retail is by consultation
          </h2>
          <p className="text-foreground/65 font-light leading-relaxed max-w-xl mx-auto">
            We only recommend products after seeing your skin. Come in for a
            complimentary reading and leave with a written routine — no bag of
            guesses.
          </p>
        </div>
      </section>

      <div className="pt-24">
        <CtaBand
          eyebrow="Home Care"
          title="Get a routine that fits"
          description="Tell us what you are using now and we will build the shortest routine that works."
        />
      </div>
    </>
  )
}
