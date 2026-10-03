import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { productHouses } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Product Houses',
  description:
    'Explore Colorescience, Dermafit, Dimp-less, Lamelle Luminesce, Nassif MD and Thalgo at Skin Studio Aesthetics. Find your home-care routine through consultation.',
}

export default function ProductHousesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Product Houses"
        title="The brands we trust enough to retail"
        description="Discover our selection of daily skincare, mineral sun protection, brightening care and body-care support. We will help you find the products that fit your routine."
      />

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {productHouses.map((house, index) => (
            <article
              key={house.name}
              className="bg-surface rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(20,58,66,0.3)]"
            >
              <Image
                src={house.image.src}
                alt={house.image.alt}
                width={house.image.width}
                height={house.image.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="(min-width: 1152px) 540px, (min-width: 768px) calc((100vw - 72px) / 2), calc(100vw - 48px)"
                className="w-full h-auto"
              />
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h2 className="font-serif text-3xl mb-4">{house.name}</h2>
                <span className="inline-block self-start text-[10px] tracking-luxe uppercase text-accent border border-accent/30 rounded-full px-3 py-1 mb-5">
                  {house.focus}
                </span>
                <p className="text-sm font-light leading-relaxed text-foreground/65 mb-7">
                  {house.description}
                </p>
                <div className="mt-auto pt-6 border-t">
                  <div className="text-[10px] tracking-luxe uppercase text-foreground/45 mb-3">
                    Featured products &amp; ranges
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
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
