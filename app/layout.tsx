import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Skin Studio Aesthetics | Modern Skincare, Elevated',
    template: '%s | Skin Studio Aesthetics',
  },
  description:
    'A modern skin studio in Cape Town offering results-driven facials, peels, and bespoke treatments in an elevated, effortless setting.',
  keywords: [
    'skin studio',
    'aesthetics',
    'facials',
    'skin treatments',
    'Cape Town',
    'skincare',
  ],
}

export const viewport: Viewport = {
  themeColor: '#14b8a6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans overflow-x-hidden">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
