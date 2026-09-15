import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { studioImages } from '@/lib/content'

export const metadata: Metadata = {
  title: 'The Studio',
  description:
    'A look inside the treatment room at Skin Studio Aesthetics, our Cape Town skin studio.',
}

const gallery = [
  studioImages.bedDetail,
  studioImages.basinDetail,
  studioImages.mirrorDetail,
  studioImages.seatingArea,
  studioImages.deviceDetail,
]

const expectations = [
  {
    title: 'A calm arrival',
    copy: 'You are welcomed into a quiet, unhurried space before any treatment begins.',
  },
  {
    title: 'A skin reading first',
    copy: 'Every visit starts with your skin read at that moment, not a fixed protocol.',
  },
  {
    title: 'Time to ask questions',
    copy: 'Appointments are spaced so there is room for your questions, not just the treatment.',
  },
]

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="The Studio"
        title="Inside our treatment room"
        description="A private, considered space in Cape Town, designed so every visit feels calm and unhurried."
      />

      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-20">
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] rounded-[2rem] overflow-hidden animate-fade-up">
          <Image
            src={studioImages.overview.src}
            alt={studioImages.overview.alt}
            fill
            preload
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image) => (
            <div
              key={image.src}
              className="relative w-full h-[320px] rounded-[1.5rem] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-4">
              What to expect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium">
              What to expect when you visit
            </h2>
          </div>
          <ul className="grid sm:grid-cols-3 gap-6">
            {expectations.map((item) => (
              <li key={item.title} className="rounded-2xl border bg-background p-7">
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="text-sm font-light leading-relaxed text-foreground/65">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Visit us"
        title="Come see the studio"
        description="Book a complimentary skin reading and experience the space for yourself."
      />
    </>
  )
}
