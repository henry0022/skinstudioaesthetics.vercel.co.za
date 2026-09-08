// Placeholder content — replace with real studio copy, pricing and brands.

export const studio = {
  name: 'Skin Studio Aesthetics',
  phone: '+27 21 000 0000',
  phoneHref: 'tel:+27210000000',
  email: 'hello@skinstudioaesthetics.co.za',
  address: '14 Kloof Street, Cape Town',
  hours: 'Tue–Sat · 9am–6pm',
  instagram: 'https://instagram.com',
}

export type Treatment = {
  slug: string
  name: string
  duration: string
  price: string
  summary: string
  detail: string
  category: 'Facials' | 'Advanced' | 'Finishing Touches'
}

export const treatments: Treatment[] = [
  {
    slug: 'signature-glow',
    name: 'The Signature Glow',
    duration: '90 min',
    price: 'from R950',
    summary:
      'A full reset — deep cleanse, gentle resurfacing, and a luminous finish that lasts.',
    detail:
      'We begin with a skin reading, then layer a double cleanse, enzymatic exfoliation, extractions where needed, and a bespoke mask. Finished with targeted serums and SPF.',
    category: 'Facials',
  },
  {
    slug: 'hydration-ritual',
    name: 'Deep Hydration Ritual',
    duration: '60 min',
    price: 'from R780',
    summary:
      'Barrier-first care for tight, dehydrated or travel-stressed skin.',
    detail:
      'Layered hyaluronic infusions, a cooling gel mask and lymphatic massage restore bounce and calm visible redness.',
    category: 'Facials',
  },
  {
    slug: 'clarity-facial',
    name: 'Clarity Facial',
    duration: '60 min',
    price: 'from R820',
    summary:
      'A focused treatment for congestion, breakouts and uneven texture.',
    detail:
      'Gentle decongestion, salicylic resurfacing and blue-light therapy to settle active blemishes without stripping the barrier.',
    category: 'Facials',
  },
  {
    slug: 'radiance-peel',
    name: 'Radiance Peel',
    duration: '60 min',
    price: 'from R1250',
    summary:
      'A refined acid resurfacing that lifts dullness and evens tone with zero downtime.',
    detail:
      'A medical-grade blend selected to your skin goals. Best in a course of three to six, spaced two to four weeks apart.',
    category: 'Advanced',
  },
  {
    slug: 'sculpt-firm-micro',
    name: 'Sculpt & Firm Micro',
    duration: '75 min',
    price: 'from R1600',
    summary:
      'Precision micro-needling to smooth texture and restore a firmer, sculpted look.',
    detail:
      'Controlled micro-channelling paired with a peptide infusion to stimulate collagen. Expect 24–48 hours of light flushing.',
    category: 'Advanced',
  },
  {
    slug: 'led-collagen',
    name: 'LED Collagen Boost',
    duration: '30 min',
    price: 'from R450',
    summary: 'A quiet, no-downtime add-on that calms and rebuilds.',
    detail:
      'Clinical red and near-infrared light to support collagen and reduce inflammation. Pairs beautifully with any facial.',
    category: 'Advanced',
  },
  {
    slug: 'brow-shape',
    name: 'Brow Shape & Tint',
    duration: '30 min',
    price: 'from R280',
    summary: 'A considered brow, mapped to your features.',
    detail: 'Shaping, tinting and a nourishing brow treatment to finish.',
    category: 'Finishing Touches',
  },
  {
    slug: 'lash-lift',
    name: 'Lash Lift & Tint',
    duration: '60 min',
    price: 'from R520',
    summary: 'Lifted, defined lashes with no extensions required.',
    detail: 'A keratin lift and tint that lasts six to eight weeks.',
    category: 'Finishing Touches',
  },
  {
    slug: 'dermaplaning',
    name: 'Dermaplaning',
    duration: '45 min',
    price: 'from R650',
    summary: 'Instantly smoother skin and a flawless makeup finish.',
    detail:
      'Surgical-grade exfoliation that removes dead cells and vellus hair, followed by a soothing mask.',
    category: 'Finishing Touches',
  },
]

export const treatmentCategories = [
  'Facials',
  'Advanced',
  'Finishing Touches',
] as const

export type ProductHouse = {
  name: string
  origin: string
  focus: string
  description: string
  hero: string[]
}

export const productHouses: ProductHouse[] = [
  {
    name: 'Maison Dermé',
    origin: 'France',
    focus: 'Barrier repair',
    description:
      'Pharmacy-grade formulations built around ceramides and postbiotics, made for reactive and compromised skin.',
    hero: ['Ceramide Balm', 'Calming Serum', 'Mineral SPF 50'],
  },
  {
    name: 'Nordic Lab',
    origin: 'Denmark',
    focus: 'Clinical actives',
    description:
      'Minimal, high-percentage actives with transparent formulations — retinoids, vitamin C and exfoliating acids.',
    hero: ['Retinal 0.1%', 'L-Ascorbic 15%', 'PHA Resurfacing Fluid'],
  },
  {
    name: 'Botanica Ross',
    origin: 'South Africa',
    focus: 'Botanical care',
    description:
      'Locally made, cruelty-free botanicals using indigenous rooibos, marula and kigelia extracts.',
    hero: ['Rooibos Antioxidant Mist', 'Marula Oil', 'Kigelia Firming Cream'],
  },
  {
    name: 'Aster Medical',
    origin: 'United States',
    focus: 'Post-procedure',
    description:
      'Recovery-focused skincare prescribed after peels and needling to shorten downtime and protect results.',
    hero: ['Growth Factor Serum', 'Recovery Balm', 'Copper Peptide Mist'],
  },
  {
    name: 'Lumen Studio',
    origin: 'Korea',
    focus: 'Hydration',
    description:
      'Lightweight, layerable hydration and gentle brightening for a glass-skin finish.',
    hero: ['Hydra Essence', 'Niacinamide Gel', 'Overnight Mask'],
  },
  {
    name: 'Verre Sun',
    origin: 'Australia',
    focus: 'Sun care',
    description:
      'Elegant broad-spectrum protection that wears well under makeup and suits every skin tone.',
    hero: ['Invisible Fluid SPF 50+', 'Tinted Mineral SPF 30', 'Lip Shield'],
  },
]

export type PriceGroup = {
  title: string
  note?: string
  items: { name: string; duration: string; price: string }[]
}

export const priceList: PriceGroup[] = [
  {
    title: 'Consultations',
    note: 'Complimentary for every new guest.',
    items: [
      { name: 'Skin Reading & Consultation', duration: '30 min', price: 'R0' },
      { name: 'Follow-up Review', duration: '20 min', price: 'R0' },
    ],
  },
  {
    title: 'Facials',
    items: treatments
      .filter((t) => t.category === 'Facials')
      .map(({ name, duration, price }) => ({ name, duration, price })),
  },
  {
    title: 'Advanced Treatments',
    note: 'A patch test is required before your first advanced treatment.',
    items: treatments
      .filter((t) => t.category === 'Advanced')
      .map(({ name, duration, price }) => ({ name, duration, price })),
  },
  {
    title: 'Finishing Touches',
    items: treatments
      .filter((t) => t.category === 'Finishing Touches')
      .map(({ name, duration, price }) => ({ name, duration, price })),
  },
  {
    title: 'Courses & Packages',
    note: 'Courses are valid for 12 months from purchase.',
    items: [
      { name: 'Radiance Peel — course of 3', duration: '3 × 60 min', price: 'from R3400' },
      { name: 'Sculpt & Firm Micro — course of 3', duration: '3 × 75 min', price: 'from R4400' },
      { name: 'Glow Membership — monthly facial', duration: 'per month', price: 'from R850' },
    ],
  },
]
