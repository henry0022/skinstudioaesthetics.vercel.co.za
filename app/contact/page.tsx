import type { Metadata } from 'next'
import { Suspense } from 'react'
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

            <a
              href={studio.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-[11px] tracking-luxe uppercase mb-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              WhatsApp now
            </a>

            <dl className="space-y-5 text-sm">
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  WhatsApp
                </dt>
                <dd>
                  <a
                    href={studio.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {studio.whatsapp}
                  </a>
                </dd>
              </div>
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
              {/* <div className="flex items-center gap-4">
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
              </div> */}
              <div className="flex items-center gap-4">
                <dt className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                  Visit
                </dt>
                <dd>{studio.address}</dd>
              </div>
            </dl>

            <div className="ph rounded-2xl h-48 mt-10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.07916909188185!2d18.66037554441194!3d-33.857016834411425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5778e1b3494f%3A0x550e0d0a8c7ae591!2sEversdal%20Medical%20%26%20Dental%20Centre!5e0!3m2!1sen!2sza!4v1789463650308!5m2!1sen!2sza"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="flex items-center gap-4 mt-6 text-sm">
              <div className="text-[10px] tracking-luxe uppercase text-accent w-16 shrink-0">
                Hours
              </div>
              <div>{studio.hours}</div>
            </div>
          </div>

          <div className="bg-background p-9 sm:p-12 lg:p-14">
            <h2 className="font-serif text-2xl font-medium mb-6">
              Leave us a message:
            </h2>
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
