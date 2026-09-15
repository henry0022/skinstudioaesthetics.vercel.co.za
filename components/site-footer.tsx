import Link from 'next/link'
import { studio } from '@/lib/content'

const explore = [
  { href: '/about', label: 'About Us' },
  { href: '/treatments', label: 'Skin Treatments' },
  { href: '/studio', label: 'Studio' },
  { href: '/product-houses', label: 'Product Houses' },
  { href: '/price-list', label: 'Price List' },
  { href: '/contact', label: 'Contact Us' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl mb-4">
            Skin Studio<span className="text-primary">.</span>
          </div>
          <p className="text-background/60 font-light leading-relaxed max-w-xs text-sm">
            A modern skin studio in Cape Town. Results-driven care in an
            elevated, effortless setting.
          </p>
        </div>

        <div>
          <h2 className="text-[11px] tracking-luxe uppercase text-primary mb-5">
            Explore
          </h2>
          <ul className="space-y-3 text-sm font-light">
            {explore.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-luxe uppercase text-primary mb-5">
            Visit
          </h2>
          <ul className="space-y-3 text-sm font-light text-background/75">
            <li>{studio.address}</li>
            <li>{studio.hours}</li>
            <li>{studio.phone}</li>
            <li>{studio.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] tracking-widest uppercase text-background/45">
          <p>&copy; {new Date().getFullYear()} Skin Studio Aesthetics</p>
          <p>Quietly luxurious skincare</p>
        </div>
      </div>
    </footer>
  )
}
