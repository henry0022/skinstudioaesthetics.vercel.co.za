import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/enquiry-form'
import { PageIntro } from '@/components/page-intro'
import { studio } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Enquire about a treatment at Skin Studio Aesthetics in Cape Town. New guests receive a complimentary skin reading.',
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Let's talk about your skin"
        description="Send an enquiry and our team will confirm your appointment. New guests receive a complimentary skin reading."
      />

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="bg-surface rounded-[2.5rem] shadow-[0_30px_70px_-40px_rgba(20,58,66,0.4)] overflow-hidden grid lg:grid-cols-2">
          <div className="p-9 sm:p-12 lg:p-14">
            <span className="inline-block text-[11px] tracking-luxe uppercase text-accent mb-5">
              Reservations
            </span>
            <h2 className="font-serif text-4xl font-medium leading-tight mb-5">
              Visit the studio
            </h2>
            <p className="text-foreground/65 font-light leading-relaxed mb-9 max-w-sm">
              We reply to every enquiry within one working day. For same-day
              availability, a call is fastest.
            </p>

            <dl className="space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  Call
                </dt>
                <dd>
                  <a
                    href={studio.phoneHref}
                    className="hover:text-accent transition-colors"
                  >
                    {studio.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${studio.email}`}
                    className="hover:text-accent transition-colors break-all"
                  >
                    {studio.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  Visit
                </dt>
                <dd>{studio.address}</dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  Hours
                </dt>
                <dd>{studio.hours}</dd>
              </div>
            </dl>

            <div className="ph rounded-2xl h-48 mt-10">Map Placeholder</div>
          </div>

          <div className="bg-background p-9 sm:p-12 lg:p-14">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
