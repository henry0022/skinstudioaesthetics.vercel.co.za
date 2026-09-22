'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/studio', label: 'Studio' },
  { href: '/product-houses', label: 'Product Houses' },
  { href: '/price-list', label: 'Price List' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center py-2.5 text-[11px] tracking-luxe uppercase">
        Complimentary skin consultation for every new guest
      </div>

      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-wide font-semibold"
            onClick={() => setOpen(false)}
          >
            Skin Studio Aesthetics
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-sm tracking-wide font-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-accent ${
                  pathname === link.href ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-luxe uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Enquire
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden text-foreground"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t bg-background px-6 py-6 flex flex-col gap-5 text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition-colors hover:text-accent ${
                  pathname === link.href ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs tracking-luxe uppercase text-center mt-1"
            >
              Enquire
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
