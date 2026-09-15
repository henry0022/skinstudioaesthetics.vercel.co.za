// Approved practitioner identity. Do not change without new sign-off.
export const practitioner = {
  name: 'Bianca Mc Cree',
  title: 'Dermal Esthetician',
}

// Business contact details — confirmed and approved. Do not change without new sign-off.
export const studio = {
  name: 'Skin Studio Aesthetics',
  whatsapp: '084 627 0126',
  whatsappHref: 'https://wa.me/27846270126',
  phone: '021 300 5162',
  phoneHref: 'tel:+27213005162',
  email: 'hello@skinstudioaesthetics.co.za',
  address: '51 Chantecler Ave, Eversdal, Cape Town, 7550',
  hours: 'Tue–Sat · 9am–6pm',
  instagram: 'https://instagram.com',
}

export type TreatmentImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Treatment = {
  slug: string
  name: string
  duration: string
  price: string
  summary: string
  detail: string
  images: TreatmentImage[]
}

// Display names for treatment slugs where automatic title-casing would not produce
// the correct public-facing name (acronyms, ampersands, hyphenation). Update this
// map — not the slugs — as treatment names are confirmed or renamed by the owner.
const treatmentNameOverrides: Record<string, string> = {
  'bioneedling-spicule-algae': 'Bioneedling Spicule & Algae',
  hifu: 'HIFU',
  'ipl-hair-removal': 'IPL Hair Removal',
  'ipl-skin-rejuvenation': 'IPL Skin Rejuvenation',
  'led-light-therapy': 'LED Light Therapy',
  'thalgo-anti-ageing-peel-marin': 'Thalgo Anti-Ageing Peel Marin',
}

function titleCaseFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function treatmentName(slug: string): string {
  return treatmentNameOverrides[slug] ?? titleCaseFromSlug(slug)
}

// Summary/detail copy is lorem ipsum pending approved treatment descriptions.
// Duration and price are TBC pending the owner's confirmed rates.
const LOREM_SUMMARY =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const LOREM_DETAIL =
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

export const treatments: Treatment[] = [
  {
    slug: 'basic-deep-cleanse-facial',
    name: treatmentName('basic-deep-cleanse-facial'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/basic-deep-cleanse-facial/deep-cleanse-facial-cleansing.webp',
        alt: "A client's face being gently cleansed during a facial treatment",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'bioneedling-spicule-algae',
    name: treatmentName('bioneedling-spicule-algae'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/bioneedling-spicule-algae/algae-mask-application.webp',
        alt: "An algae mask being applied to a client's face",
        width: 900,
        height: 1200,
      },
      {
        src: '/images/treatments/bioneedling-spicule-algae/algae-mask-close-up.webp',
        alt: 'Close-up of an algae mask on the skin during treatment',
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'dermaplaning',
    name: treatmentName('dermaplaning'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/dermaplaning/dermaplaning-treatment.webp',
        alt: "A practitioner performing a dermaplaning treatment on a client's cheek",
        width: 960,
        height: 1200,
      },
      {
        src: '/images/treatments/dermaplaning/exfoliation-results.webp',
        alt: 'Close-up of smooth skin after a dermaplaning treatment',
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'hifu',
    name: treatmentName('hifu'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/hifu/hifu-facial-treatment.webp',
        alt: "A HIFU device being applied to a client's jawline during treatment",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'ipl-hair-removal',
    name: treatmentName('ipl-hair-removal'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/ipl-hair-removal/ipl-hair-removal-leg.webp',
        alt: "An IPL device being used for hair removal on a client's leg",
        width: 800,
        height: 1200,
      },
    ],
  },
  {
    slug: 'ipl-skin-rejuvenation',
    name: treatmentName('ipl-skin-rejuvenation'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/ipl-skin-rejuvenation/ipl-facial-treatment.webp',
        alt: "An IPL device being applied to a client's face during a skin rejuvenation treatment",
        width: 960,
        height: 1200,
      },
      {
        src: '/images/treatments/ipl-skin-rejuvenation/ipl-facial-close-up.webp',
        alt: 'Close-up of an IPL skin rejuvenation treatment in progress',
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'led-light-therapy',
    name: treatmentName('led-light-therapy'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/led-light-therapy/led-light-therapy-side-view.webp',
        alt: 'A client receiving LED light therapy, viewed from the side',
        width: 900,
        height: 1200,
      },
      {
        src: '/images/treatments/led-light-therapy/led-light-therapy-close-up.webp',
        alt: 'Close-up of an LED light therapy mask in use',
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'mesotherapy',
    name: treatmentName('mesotherapy'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/mesotherapy/mesotherapy-needling-close-up.webp',
        alt: 'Close-up of a mesotherapy needling treatment on the skin',
        width: 900,
        height: 1200,
      },
      {
        src: '/images/treatments/mesotherapy/mesotherapy-serum-infusion.webp',
        alt: 'A serum being infused into the skin during a mesotherapy treatment',
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'proforma-jet-plasma',
    name: treatmentName('proforma-jet-plasma'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/proforma-jet-plasma/jet-plasma-facial-treatment.webp',
        alt: "A Proforma Jet Plasma device being used on a client's face",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: 'thalgo-anti-ageing-peel-marin',
    name: treatmentName('thalgo-anti-ageing-peel-marin'),
    duration: 'TBC',
    price: 'TBC',
    summary: LOREM_SUMMARY,
    detail: LOREM_DETAIL,
    images: [
      {
        src: '/images/treatments/thalgo-anti-ageing-peel-marin/peel-preparation.webp',
        alt: 'A practitioner preparing a peel solution before treatment',
        width: 900,
        height: 1200,
      },
      {
        src: '/images/treatments/thalgo-anti-ageing-peel-marin/peel-application.webp',
        alt: "A peel being applied to a client's face during treatment",
        width: 900,
        height: 1200,
      },
    ],
  },
]

// Studio (Treatment Room) photography, shared across the homepage, About and
// Contact pages. Keyed for easy reuse without hard-coding paths in components.
export const studioImages: Record<string, TreatmentImage> = {
  overview: {
    src: '/images/studio/treatment-room-overview.webp',
    alt: 'Overview of the treatment room at Skin Studio Aesthetics',
    width: 900,
    height: 1600,
  },
  interior: {
    src: '/images/studio/treatment-room-interior.webp',
    alt: 'Interior view of the treatment room at Skin Studio Aesthetics',
    width: 900,
    height: 1600,
  },
  bedDetail: {
    src: '/images/studio/treatment-bed-detail.webp',
    alt: 'Detail of the treatment bed in the studio',
    width: 800,
    height: 1200,
  },
  basinDetail: {
    src: '/images/studio/treatment-room-basin-detail.webp',
    alt: 'Detail of the basin area in the treatment room',
    width: 675,
    height: 1200,
  },
  mirrorDetail: {
    src: '/images/studio/treatment-room-mirror-detail.webp',
    alt: 'Detail of the mirror and seating area in the treatment room',
    width: 675,
    height: 1200,
  },
  seatingArea: {
    src: '/images/studio/treatment-room-seating-area.webp',
    alt: 'The seating area within the treatment room',
    width: 675,
    height: 1200,
  },
  deviceDetail: {
    src: '/images/studio/aesthetic-device-detail.webp',
    alt: 'Close-up detail of an aesthetic treatment device in the studio',
    width: 675,
    height: 1200,
  },
}

export type ProductHouse = {
  name: string
  origin: string
  focus: string
  description: string
  hero: string[]
}

// Placeholder pending the owner's confirmed product house names and ranges.
export const productHouses: ProductHouse[] = [
  {
    name: 'Maison Dermé',
    origin: 'France',
    focus: 'Barrier repair',
    description: LOREM_SUMMARY,
    hero: ['Ceramide Balm', 'Calming Serum', 'Mineral SPF 50'],
  },
  {
    name: 'Nordic Lab',
    origin: 'Denmark',
    focus: 'Clinical actives',
    description: LOREM_SUMMARY,
    hero: ['Retinal 0.1%', 'L-Ascorbic 15%', 'PHA Resurfacing Fluid'],
  },
  {
    name: 'Botanica Ross',
    origin: 'South Africa',
    focus: 'Botanical care',
    description: LOREM_SUMMARY,
    hero: ['Rooibos Antioxidant Mist', 'Marula Oil', 'Kigelia Firming Cream'],
  },
  {
    name: 'Aster Medical',
    origin: 'United States',
    focus: 'Post-procedure',
    description: LOREM_SUMMARY,
    hero: ['Growth Factor Serum', 'Recovery Balm', 'Copper Peptide Mist'],
  },
  {
    name: 'Lumen Studio',
    origin: 'Korea',
    focus: 'Hydration',
    description: LOREM_SUMMARY,
    hero: ['Hydra Essence', 'Niacinamide Gel', 'Overnight Mask'],
  },
  {
    name: 'Verre Sun',
    origin: 'Australia',
    focus: 'Sun care',
    description: LOREM_SUMMARY,
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
    title: 'Treatments',
    note: 'Durations and prices are TBC pending confirmation.',
    items: treatments.map(({ name, duration, price }) => ({
      name,
      duration,
      price,
    })),
  },
]
