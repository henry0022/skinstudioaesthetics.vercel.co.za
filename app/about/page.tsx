import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { PageIntro } from '@/components/page-intro'
import { practitioner, studio, studioImages } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Skin Studio Aesthetics, a Cape Town skin studio.',
}

const values = [
  {
    title: 'Skin first',
    copy: 'We read your skin at every visit and adjust — no fixed protocols, no upselling.',
  },
  {
    title: 'Evidence over hype',
    copy: 'Every product and device on our menu earns its place through results, not trends.',
  },
  {
    title: 'Unhurried care',
    copy: 'Appointments are spaced so nothing is rushed, including your questions.',
  },
  {
    title: 'Honest guidance',
    copy: 'If a treatment is not right for you, we will tell you and suggest a better route.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="A studio built around how skin actually behaves"
        description="Skin Studio Aesthetics pairs medical-grade expertise with the calm of a private retreat, in the heart of Cape Town."
      />

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-start">
        <div className="relative w-full h-[420px] rounded-[2rem] overflow-hidden">
          <Image
            src={studioImages.interior.src}
            alt={studioImages.interior.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6">
            Our story
          </h2>
          <p className="text-foreground/70 font-light leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-foreground/70 font-light leading-relaxed mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-12 text-center">
            What we stand for
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <li key={value.title} className="rounded-2xl border p-7">
                <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
                <p className="text-sm font-light leading-relaxed text-foreground/65">
                  {value.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-5">
            The Practitioner
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6">
            Led by {practitioner.name}
          </h2>
          <p className="text-foreground/70 font-light leading-relaxed mb-5">
            {practitioner.name} is a {practitioner.title} at {studio.name}.
          </p>
        </div>
        <div className="relative w-full h-[420px] rounded-[2rem] overflow-hidden">
          <Image
            src="/images/hero-main.webp"
            alt={`${practitioner.name}, ${practitioner.title} at ${studio.name}, in the studio`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-surface rounded-3xl p-9 sm:p-12 grid sm:grid-cols-4 gap-8 text-sm font-light">
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">
              Visit
            </div>
            {studio.address}
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">
              Hours
            </div>
            {studio.hours}
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">
              WhatsApp
            </div>
            <a href={studio.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              {studio.whatsapp}
            </a>
          </div>
          <div>
            <div className="text-[10px] tracking-luxe uppercase text-accent mb-2">
              Call
            </div>
            <a href={studio.phoneHref} className="hover:text-accent transition-colors">
              {studio.phone}
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Say hello"
        title="Come see the space"
        description="Book a complimentary skin reading and we will map out a plan together."
      />
    </>
  )
}
