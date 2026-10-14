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
  hours: ['Monday - Friday 8:30 - 16:00', 'Saturdays: 08:00 - 12:00', 'Closed on public holidays'],
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
  category: string
  summary: string
  description: {
    paragraphs: string[]
    lists?: { heading?: string; items: string[] }[]
  }
  pricing: {
    options: { label: string; price: string; note?: string }[]
    addOns?: { label: string; price: string; note?: string }[]
    packages?: { label: string; price: string; note?: string }[]
    note?: string
  }
  images: TreatmentImage[]
}

export const treatments: Treatment[] = [
  {
    slug: 'basic-deep-cleanse-facial',
    name: 'Basic Deep Cleanse Facial',
    category: 'Facials',
    summary: 'A deep cleanse with gentle enzyme exfoliation, extractions, a peel, mask and massage.',
    description: {
      paragraphs: [
        'Cleanse pores with gentle enzyme exfoliation, extractions where needed, Dermafit AHA power peel (no downtime), hydrating facial mask, facial and shoulder massage.',
      ],
    },
    pricing: { options: [{ label: 'Per session', price: 'R750' }] },
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
    name: 'Bio-Needling Spicule & Algae',
    category: 'Peels',
    summary: 'A natural algae peel for acne, scarring, inflammation, pigmentation and fine lines.',
    description: {
      paragraphs: [
        'The spicules in the algae peel contain a host of minerals including zinc and copper both of which are beneficial for those with acne, or those looking for an effective anti-ageing treatment. This is a unique peel that reduces fine lines and scarring, heals acne and inflammation and targets hyperpigmentation. This peel is 100% natural and safe for all skin tones.',
        'This peel promotes a natural and safe peel in the epidermis (top layers of the skin) with amazing results in only 7-10 days. Spongilla spicules are microscopic, barbed structures derived from the endoskeleton of freshwater sponges, enriched with essential minerals and nutrients beneficial to the skin. These bioactive spicules penetrate deep into the dermal layer, stimulating collagen and elastin synthesis to enhance skin firmness, smoothness, and overall radiance. This advanced treatment generates 3–5 million microchannels within just five minutes, dramatically increasing cellular turnover and amplifying the absorption of topical skincare products by up to 3,000%. The skin remains actively stimulated for up to 72 hours post-treatment, optimizing nutrient delivery and waste elimination.',
      ],
    },
    pricing: {
      options: [
        { label: '1 session (Face & Neck)', price: 'R1,300' },
        { label: 'Chest', price: 'R600' },
        { label: 'Green Algae', price: 'R1,300' },
        { label: 'Snowflake Algae infusion', price: 'R1,600' },
      ],
      note: 'Discount on 4 sessions.',
    },
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
    name: 'Dermaplaning',
    category: 'Advanced Skin Treatments',
    summary: 'Professional exfoliation and fine vellus hair removal for smoother, brighter-looking skin.',
    description: {
      paragraphs: [
        'Dermaplaning is a professional exfoliation and hair removal treatment that uses a sterile surgical scalpel to scrape off the top layer of dead skin cells and fine vellus hair ("peach fuzz") from the face. This mechanical process creates smoother, brighter-looking skin, improves the absorption of skincare products, and can reduce the appearance of fine lines and acne scars.',
      ],
    },
    pricing: {
      options: [{ label: 'Per session', price: 'R550' }],
      addOns: [{ label: 'Customised peel', price: 'Enquire for pricing', note: 'Can be combined for glowing results.' }],
    },
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
    name: 'HIFU (High-Intensity Focused Ultrasound)',
    category: 'Advanced Skin Treatments',
    summary: 'A non-invasive skin tightening and lifting treatment using focused ultrasound energy.',
    description: {
      paragraphs: [
        'HIFU (High-Intensity Focused Ultrasound) is a non-invasive skin tightening and lifting treatment that uses focused ultrasound energy to target the deep layers of the skin, including the SMAS (Superficial Muscular Aponeurotic System) – the same layer addressed in surgical facelifts. By delivering precise thermal energy, HIFU stimulates collagen production and causes immediate tissue contraction, resulting in firmer, tighter, and more lifted skin over time.',
        'It’s ideal for sagging jawlines, drooping eyelids, neck laxity, and overall facial contouring—with no needles, no downtime, and long-lasting results that continue to improve for up to 3–6 months.',
      ],
    },
    pricing: {
      options: [
        { label: 'Full face', price: 'R3,900' },
        { label: 'Full face and neck', price: 'R4,500' },
        { label: 'FND', price: 'R5,500' },
      ],
    },
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
    name: 'IPL eLight Laser Hair Removal',
    category: 'Hair Removal',
    summary: 'Light-based hair removal priced according to the area being treated.',
    description: {
      paragraphs: ['IPL eLight Laser Hair Removal'],
    },
    pricing: {
      options: [{ label: 'Per area', price: 'Price on request per area' }],
      note: '10% discount on 6 sessions. 20% discount on 12 sessions.',
    },
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
    name: 'IPL Skin Rejuvenation',
    category: 'Advanced Skin Treatments',
    summary: 'A light-based treatment for pigmentation, redness and skin clarity.',
    description: {
      paragraphs: [
        'IPL (Intense Pulsed Light) is a non-invasive, light-based therapy that targets sun damage, pigmentation, redness, broken capillaries, and uneven skin tone by delivering high-intensity pulses of broad-spectrum light into the skin. The light energy is absorbed by pigment and blood vessels, breaking them down without damaging the surrounding tissue. Over time, the skin naturally eliminates these imperfections, revealing a clearer, more even complexion.',
        'This treatment also stimulates collagen production, improving skin texture, reducing fine lines, and refining pores. IPL is ideal for treating freckles, age spots, rosacea, and vascular lesions on the face, neck, chest, and hands. With minimal downtime and progressive results over a series of sessions, IPL is a go-to for clients seeking overall skin clarity, brightness, and rejuvenation.',
      ],
    },
    pricing: {
      options: [
        { label: 'Full face', price: 'R1,100' },
        { label: 'Face and Neck', price: 'R1,600' },
        { label: 'Face neck and Decolletage', price: 'R2,200' },
      ],
      addOns: [{ label: 'Lamelle or Dermafit peel', price: 'R600 extra' }],
    },
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
    name: 'LED Light Therapy',
    category: 'Advanced Skin Treatments',
    summary: 'A calming treatment that can be used after other treatments or as a standalone service.',
    description: {
      paragraphs: [
        'LED light therapy can be used after any treatment. This will calm down the skin after treatments such as meso Therapy,micro needling and Spicules.',
        'It can also be done as a stand alone treatment to treat various skin conditions like acne,skin sensitivity, eczema,reactive skin,collagen and elastin.',
      ],
    },
    pricing: {
      options: [{ label: 'Per session', price: 'R500' }],
      addOns: [{ label: 'Add to any other treatment', price: 'R350' }],
    },
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
    name: 'Mesotherapy',
    category: 'Advanced Skin Treatments',
    summary: 'A customised Hydrapen MesoSkin treatment using a blend of peptides, meso fillers, growth factors and pigment inhibitors.',
    description: {
      paragraphs: [
        'Transform the structure of your skin with the Hydrapen MesoSkin device. A special cocktail blend of Peptides,Meso fillers,growth factors and pigment inhibitors can be mixed together,to transform any skin type needing improvement in texture,fine lines and wrinkles,lacks volume,needs plumping and an overall glowing skin! Stimulate deep collagen with this treatment customised to your unique needs.',
        'During this treatment we use medical grade serums that complement your skin type.',
      ],
    },
    pricing: {
      options: [{ label: 'Treatment pricing', price: 'Enquire for pricing' }],
    },
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
    name: 'Original Proforma Jet Plasma',
    category: 'Advanced Skin Treatments',
    summary: 'A cellular renewal treatment designed to stimulate collagen and fibroblast production in the deeper layers of the skin.',
    description: {
      paragraphs: [
        'Original Proforma Jet Plasma works on the cellular renewal of the skin. Collagen and fibroblast production is stimulated in the deep subcutaneous layers of the skin to produce lifting and firming results. One can work the entire neck and face area,including the upper eyelids for a lift and reduction in dark puffy circles.',
        'Loose and crepe neck skin are tightened and lifted.',
      ],
    },
    pricing: {
      options: [],
      packages: [
        { label: '3 sessions', price: 'R5,000', note: 'Results can last up to 1 year.' },
        { label: '6 sessions', price: 'R7,500', note: 'Results can last 2-3 years.' },
        { label: '9 sessions', price: 'R10,950', note: 'Results can last up to 5 years.' },
      ],
      note: 'Sessions needed: 3-9 spaced 2 days from each other.',
    },
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
    slug: 'prx-plus-skin-booster',
    name: 'PRX-PLUS Skin Booster & Brightening Gel',
    category: 'Advanced Skin Treatments',
    summary: 'A needle-free skin booster to help refresh tone, texture and firmness, with no peeling or downtime expected.',
    description: {
      paragraphs: [
        'A needle-free gel by WiQo, massaged into the skin to encourage collagen renewal and a brighter, more even-looking tone — with no peeling or downtime expected. It may help with pigmentation, fine lines, loss of firmness and enlarged-looking pores; we confirm suitability at a consultation first.',
      ],
      lists: [
        {
          heading: 'Recommended protocol',
          items: [
            'A course of 4 sessions, spaced two weeks apart',
            'Barrier-repair homecare between sessions',
          ],
        },
      ],
    },
    pricing: {
      options: [{ label: 'Per session (1 ml, face and/or neck)', price: 'R1,850' }],
      packages: [{ label: 'Course of 4 sessions', price: 'R6,290', note: '15% off. Sessions spaced two weeks apart.' }],
    },
    images: [
      {
        src: '/images/treatments/prx-plus-skin-booster/prx-plus-treatment.webp',
        alt: "PRX-PLUS gel being applied to a client's forehead, with a PRX-PLUS vial in the foreground",
        width: 901,
        height: 1200,
      },
    ],
  },
  {
    slug: 'thalgo-source-marine-medispa-treatment',
    name: 'Thalgo Source Marine Medispa Treatment',
    category: 'Facials',
    summary: 'A relaxing source marine treatment for tired, lipid dry skin.',
    description: {
      paragraphs: [
        'This treatment gives tired, lipid dry skin the break it deserves.',
        'This treatment will take you on a relaxing journey to the French Riviera.',
      ],
      lists: [
        {
          heading: 'This treatment includes',
          items: [
            'Deep cleansing',
            'Gentle exfoliation',
            'Source marine algae mask',
            'Signature marine massage for the face/neck/shoulders',
            'Rehydrate pro mask',
            'Hydrating anti ageing serums',
          ],
        },
      ],
    },
    pricing: {
      options: [{ label: 'Per treatment', price: 'R1,450' }],
      addOns: [
        { label: 'Dermaplaning', price: 'R450' },
        { label: 'Gentle hydrating peel', price: 'R500' },
      ],
    },
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
  {
    slug: 'medical-grade-peels',
    name: 'Medical Grade Peels',
    category: 'Peels',
    summary: 'Customised chemical exfoliation for acne, fine lines, hyperpigmentation, skin texture and melasma.',
    description: {
      paragraphs: [
        'Medical-grade peels are a type of chemical exfoliation treatment that uses a solution to remove the top layers of the skin. They are typically performed by a trained skincare professional or dermatologist and can address various skin concerns, such as acne, fine lines and wrinkles, hyperpigmentation, skin texture, and melasma.',
        'These peels penetrate deeper into the skin than over-the-counter peels, providing more dramatic results. They can be customized to individual skin types and concerns, and may require downtime for recovery. They are a popular treatment for achieving healthier, more radiant-looking skin.',
        'We have a variety of peels to choose from such as: TCA, Tretinoin (Retinol), Jessners peel, AHA power peel, Dermabright for all forms of pigmentation and Melasma, 40% Pyruvic acid. We make use of Dermafit Skin-Science and Lamelle Peels.',
      ],
    },
    pricing: {
      options: [{ label: 'Prices range between', price: 'R650–R1,400' }],
      note: 'Enquire for more information.',
    },
    images: [],
  },
  {
    slug: 'dermapen-microneedling',
    name: 'DermaPen Microneedling',
    category: 'Advanced Skin Treatments',
    summary: 'Microneedling to improve fine lines, wrinkles, acne scars, stretch marks and overall skin texture.',
    description: {
      paragraphs: [
        'DermaPen microneedling is an advanced skin rejuvenation treatment that boosts collagen and elastin production to improve fine lines, wrinkles, acne scars, stretch marks, and overall skin texture. Using tiny needles to create micro-injuries, it triggers the skin’s natural repair process, replacing damaged tissue with fresh, healthy collagen.',
        'Suitable for all skin types and areas of the body, Dermapen treats hard-to-reach zones like around the eyes and lips with precision. It offers minimal downtime, adjustable needle depths for personalized results, and includes a superficial chemical peel for enhanced exfoliation and glow. Safe, effective, and clinically proven for firmer, smoother, more youthful skin. During this treatment we use medical grade serums that complement your skin type.',
      ],
    },
    pricing: {
      options: [
        { label: '1 session (Neck & Face)', price: 'R1,450' },
        { label: 'Decollete Microneedling', price: 'R500' },
        { label: 'Face only', price: 'R1,800' },
        { label: 'Face and neck', price: 'R2,200' },
      ],
      note: 'Additional discount on packages of 4 sessions. Package discount of 4 sessions available.',
    },
    images: [],
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
  focus: string
  description: string
  hero: string[]
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export const productHouses: ProductHouse[] = [
  {
    name: 'Colorescience',
    focus: 'Mineral sun care',
    description:
      'Everyday mineral sun protection with face shields, brush-on powders and colour balms. Explore the Sunforgettable Total Protection range as part of your daily skincare routine.',
    hero: ['Face Shield Glow SPF 50', 'Face Shield Classic SPF 50', 'Sheer Matte Brush-On Shield SPF 30', 'Bronze Brush-On Shield SPF 50', 'Color Balm SPF 50'],
    image: {
      src: '/images/products/colorescience-range.webp',
      alt: 'Colorescience Sunforgettable face shields, colour balms and brush-on mineral sunscreens',
      width: 1024,
      height: 768,
    },
  },
  {
    name: 'Dermafit',
    focus: 'Daily skin care',
    description:
      'A daily skincare range covering cleansing, toning and hydration. From a calming facial mist to cream and gel moisturisers, we can help you choose the essentials for your skin.',
    hero: ['Glow-Mist', 'Derma-Oil Cleanse', 'Skin Prep', 'Soft Wash', 'Glow Matrix', 'Derma Clarity'],
    image: {
      src: '/images/products/dermafit-range.webp',
      alt: 'Dermafit facial mist, cleansing oil, toner, daily cleanser and hydrating moisturisers',
      width: 1024,
      height: 768,
    },
  },
  {
    name: 'Dimp-less',
    focus: 'Cellulite management',
    description:
      'An oral supplement in a 60-capsule format, offered as part of our body-care selection. Speak to us about suitability and how it may fit into your cellulite-management routine.',
    hero: ['Cellulite Management - 60 capsules'],
    image: {
      src: '/images/products/dimp-less-cellulite-management.webp',
      alt: 'Dimp-less Cellulite Management supplement bottle with capsules',
      width: 1024,
      height: 768,
    },
  },
  {
    name: 'iS Clinical',
    focus: 'Cosmeceutical skin care',
    description:
      'Cosmeceutical skincare that pairs botanical actives with clinical science. Explore targeted serums and cleansing essentials, and we can help you build a routine around your skin goals.',
    hero: ['Super Serum Advance+', 'Youth Complex', 'Cleansing Complex', 'Active Serum'],
    image: {
      src: '/images/products/is-clinical-range.webp',
      alt: 'iS Clinical Super Serum Advance+, Youth Complex, Cleansing Complex and Active Serum',
      width: 1200,
      height: 900,
    },
  },
  {
    name: 'Lamelle Luminesce',
    focus: 'Brightening care',
    description:
      'A focused brightening range from Lamelle, with cleansing, daytime care and evening skincare. Discover a coordinated routine for concerns around uneven-looking skin tone.',
    hero: ['Brightening Cleanse', 'Brighter Day', 'Brightening Defence 30', 'Evening Glow'],
    image: {
      src: '/images/products/luminesce-range.webp',
      alt: 'Lamelle Luminesce brightening cleanser, day cream, Brightening Defence 30 and Evening Glow',
      width: 1024,
      height: 768,
    },
  },
  {
    name: 'Nassif MD',
    focus: 'Exfoliation & hydration',
    description:
      'Cleansing, exfoliating pads and serum care in one considered selection. Explore gentle and original Detox Pads alongside the Dawn to Dusk cleanser and Hydro-Screen Serum.',
    hero: ['Detox Pads - Gentle', 'Detox Pads', 'Dawn to Dusk Cleanser', 'Hydro-Screen Serum'],
    image: {
      src: '/images/products/nassif-md-range.webp',
      alt: 'Nassif MD gentle and original Detox Pads, Dawn to Dusk facial cleanser and Hydro-Screen Serum',
      width: 1024,
      height: 768,
    },
  },
  {
    name: 'Thalgo',
    focus: 'Marine-inspired skin care',
    description:
      'Marine-inspired skincare spanning the Spiruline Boost, Hyalu-Procollagène and Silicium Lift ranges. Discover serums, eye care, masks and moisturisers to complement your treatment routine.',
    hero: ['Spiruline Boost', 'Hyalu-Procollagène', 'Silicium Lift', 'Collagène 10 000'],
    image: {
      src: '/images/products/thalgo-range.webp',
      alt: 'Thalgo serums, eye care, mask, moisturisers and Collagène 10 000 with a massage tool',
      width: 1024,
      height: 768,
    },
  },
]

export type PriceGroup = {
  title: string
  note?: string
  items: Treatment[]
}

export const priceList: PriceGroup[] = [
  {
    title: 'Treatments',
    items: treatments,
  },
]
