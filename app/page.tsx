import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { productHouses, treatments } from '@/lib/content'

const featured = treatments.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block text-[11px] tracking-luxe uppercase text-primary mb-6">
              Cape Town · Skin Studio
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium mb-7 text-balance">
              Skin that speaks{' '}
              <span className="italic text-primary">quietly</span>, glows
              loudly.
            </h1>
            <p className="text-base leading-relaxed text-foreground/70 max-w-md mb-9 font-light">
              Results-driven facials and bespoke rituals, delivered in a calm,
              considered space designed entirely around you.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="bg-ink text-background px-8 py-4 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a Treatment
              </Link>
              <Link
                href="/treatments"
                className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                Explore menu
              </Link>
            </div>

            <dl className="flex items-center gap-8 mt-12 pt-8 border-t">
              {[
                { value: '4.9★', label: '600+ reviews' },
                { value: '12yrs', label: 'Of expertise' },
                { value: '98%', label: 'Rebook rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-serif text-3xl">{stat.value}</dt>
                  <dd className="text-[11px] tracking-widest uppercase text-foreground/50 mt-1">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative w-full h-[440px] sm:h-[520px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,59,60,0.4)]">
              <Image
                src="/images/hero.png"
                alt="A guest receiving a facial treatment at Skin Studio Aesthetics"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-4 bg-surface rounded-2xl px-5 py-4 shadow-lg hidden sm:block">
              <div className="font-serif text-2xl leading-none">Glow</div>
              <div className="text-[10px] tracking-luxe uppercase text-primary mt-1">
                Signature Facial
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm tracking-luxe uppercase text-foreground/60">
          {['Medical-Grade', 'Cruelty-Free', 'Bespoke Rituals', 'Zero Downtime', 'Quiet Luxury'].map(
            (value, i) => (
              <span key={value} className="flex items-center gap-6">
                {i > 0 && <span className="text-primary">/</span>}
                {value}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-luxe uppercase text-primary mb-4">
            The Menu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-4 text-balance">
            Treatments, thoughtfully composed
          </h2>
          <p className="text-foreground/65 font-light leading-relaxed">
            Every service begins with a reading of your skin, so results feel
            effortless and entirely your own.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((treatment, i) => (
            <article
              key={treatment.slug}
              className={`bg-surface rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(11,59,60,0.3)] ${
                i === 1 ? 'md:-mt-6' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-2xl">{treatment.name}</h3>
                <span className="text-[10px] tracking-widest uppercase text-foreground/45">
                  {treatment.duration}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/65 font-light mb-6">
                {treatment.summary}
              </p>
              <div className="flex items-center justify-between pt-5 border-t">
                <span className="font-serif text-xl">{treatment.price}</span>
                <Link
                  href="/contact"
                  className="text-xs tracking-luxe uppercase text-primary hover:text-ink transition-colors"
                >
                  Book →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/treatments"
            className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View all treatments
          </Link>
        </div>
      </section>

      <section className="bg-ink text-background py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-[11px] tracking-luxe uppercase text-primary mb-6">
              The Studio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-6 text-balance">
              A space designed to slow the world down.
            </h2>
            <p className="text-background/75 leading-relaxed font-light mb-5">
              Skin Studio Aesthetics pairs medical-grade expertise with the calm
              of a private retreat. Soft light, considered detail, and a team
              that listens before they touch.
            </p>
            <p className="text-background/55 leading-relaxed font-light text-sm mb-9">
              No rushed appointments, no one-size treatments — just skincare
              that respects your time and your skin.
            </p>
            <Link
              href="/about"
              className="inline-block border border-background/40 px-8 py-4 rounded-full text-xs tracking-luxe uppercase hover:bg-background hover:text-ink transition-colors"
            >
              About the Studio
            </Link>
          </div>

          <ul className="grid sm:grid-cols-2 gap-5">
            {[
              ['Skin reading first', 'Every visit starts with an honest assessment — never a template.'],
              ['Medical-grade only', 'Products and devices chosen for evidence, not marketing.'],
              ['Zero pressure', 'We recommend what you need, and nothing you do not.'],
              ['Aftercare included', 'A written home routine you can actually keep up with.'],
            ].map(([title, copy]) => (
              <li
                key={title}
                className="rounded-2xl border border-background/15 p-6"
              >
                <h3 className="font-serif text-xl mb-2">{title}</h3>
                <p className="text-sm font-light text-background/65 leading-relaxed">
                  {copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="inline-block text-[11px] tracking-luxe uppercase text-primary mb-4">
              Product Houses
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium">
              The brands we retail
            </h2>
          </div>
          <Link
            href="/product-houses"
            className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            See all houses
          </Link>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {productHouses.map((house) => (
            <li
              key={house.name}
              className="bg-surface rounded-2xl px-6 py-8 text-center"
            >
              <div className="font-serif text-xl">{house.name}</div>
              <div className="text-[10px] tracking-luxe uppercase text-foreground/45 mt-2">
                {house.focus}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Book your glow" />
    </>
  )
}
