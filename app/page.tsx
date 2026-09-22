import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { practitioner, productHouses, studio, treatments } from '@/lib/content'

const featured = treatments.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-6">
              Cape Town · Skin Studio
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] font-medium mb-7 text-balance">
              Skin that speaks{' '}
              <span className="italic text-accent">quietly</span>, glows
              loudly.
            </h1>
            <p className="text-base leading-relaxed text-foreground/70 max-w-md mb-9 font-light">
              Results-driven facials and bespoke rituals, delivered in a calm,
              considered space designed entirely around you.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a Treatment
              </Link>
              <a
                href={studio.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-foreground/20 bg-surface px-8 py-4 rounded-full text-xs tracking-luxe uppercase text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                WhatsApp
              </a>
              <Link
                href="/treatments"
                className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Explore menu
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative w-full h-[440px] sm:h-[520px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(20,58,66,0.4)]">
              <Image
                src="/images/hero-main.webp"
                alt={`${practitioner.name}, the practitioner at Skin Studio Aesthetics, in the studio`}
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-4 bg-surface rounded-2xl px-5 py-4 shadow-lg hidden sm:block">
              <div className="font-serif text-2xl leading-none">{practitioner.name}</div>
              <div className="text-[10px] tracking-luxe uppercase text-accent mt-1">
                {practitioner.title}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-foreground/10 bg-surface/80 p-6 shadow-[0_20px_35px_-28px_rgba(20,58,66,0.35)]">
              <p className="text-[11px] tracking-luxe uppercase text-accent mb-3">
                Discover the true artistry of beautiful,healthy skin
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 font-light">
                With over 14 years of experience as a {practitioner.title},{' '}
                {practitioner.name} has built her career around a genuine
                passion for aesthetic skincare, skin health and helping
                clients feel confident in their own skin.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 font-light mt-4">
                At Skin Studio Aesthetics, every treatment is approached with
                knowledge, precision and a deep understanding of the skin.
                Bianca’s passion lies not only in delivering advanced aesthetic
                treatments, but in creating visible, meaningful results that leave
                clients feeling confident, cared for and truly satisfied.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 font-light mt-4">
                We believe that beautiful skin is about more than appearance. It
                is about healthy, confident and radiant skin — achieved through
                personalised treatments, professional expertise and a commitment
                to excellence.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 font-light mt-4">
                From advanced skin rejuvenation and corrective skincare to tailored
                aesthetic treatments, every treatment journey is carefully designed
                around your individual skin concerns and goals.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 font-light mt-4">
                Your skin deserves expertise. Your results deserve dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm tracking-luxe uppercase text-foreground/60">
          {['Medical-Grade', 'Cruelty-Free', 'Bespoke Rituals', 'Zero Downtime', 'Quiet Luxury'].map(
            (value, i) => (
              <span key={value} className="flex items-center gap-6">
                {i > 0 && <span className="text-accent">/</span>}
                {value}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-4">
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

        <div className="text-center mb-14">
          <Link
            href="/treatments"
            className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            View all treatments
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((treatment, i) => {
            const cover = treatment.images[0]
            return (
              <article
                key={treatment.slug}
                className={`bg-surface rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(20,58,66,0.3)] ${
                  i === 1 ? 'md:-mt-6' : ''
                }`}
              >
                {cover ? (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-7">
                  <div className="mb-3">
                    <span className="text-[10px] tracking-luxe uppercase text-accent">
                      {treatment.category}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight mt-2">{treatment.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/65 font-light mb-6">
                    {treatment.summary}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t">
                    <span className="font-serif text-xl">
                      {treatment.pricing.options[0]?.price ?? 'Enquire for pricing'}
                    </span>
                    <Link
                      href={`/contact?treatment=${treatment.slug}`}
                      className="text-xs tracking-luxe uppercase text-accent hover:text-ink transition-colors"
                    >
                      Book →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-primary text-ink py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-[11px] tracking-luxe uppercase text-ink/70 mb-6">
              The Studio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-6 text-balance">
              A space designed to slow the world down.
            </h2>
            <p className="text-ink/80 leading-relaxed font-light mb-5">
              Skin Studio Aesthetics pairs medical-grade expertise with the calm
              of a private retreat. Soft light, considered detail, and a team
              that listens before they touch.
            </p>
            <p className="text-ink/65 leading-relaxed font-light text-sm mb-9">
              No rushed appointments, no one-size treatments — just skincare
              that respects your time and your skin.
            </p>
            <Link
              href="/about"
              className="inline-block border border-ink/40 px-8 py-4 rounded-full text-xs tracking-luxe uppercase hover:bg-ink hover:text-primary transition-colors"
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
                className="rounded-2xl border border-ink/20 p-6"
              >
                <h3 className="font-serif text-xl mb-2">{title}</h3>
                <p className="text-sm font-light text-ink/70 leading-relaxed">
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
            <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-4">
              Product Houses
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium">
              The brands we retail
            </h2>
          </div>
          <Link
            href="/product-houses"
            className="text-sm tracking-wide border-b border-foreground/40 pb-1 hover:text-accent hover:border-accent transition-colors"
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
