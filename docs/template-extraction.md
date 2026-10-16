# Reusing this site as a template

The site was built for one client, but most of it is generic: a small studio or clinic marketing site with a service menu, price list, product ranges, a gallery and an enquiry form. This guide lists what's reusable, what's specific to Skin Studio Aesthetics, and the steps to turn it into a starter for a new client.

## What's reusable as-is

| Piece | Location | Notes |
| --- | --- | --- |
| Page shells and layout | `app/*/page.tsx`, `app/layout.tsx` | Structure is generic; the copy inside isn't (see below) |
| Shared components | `components/page-intro.tsx`, `cta-band.tsx`, `enquiry-form.tsx`, `treatment-hash-scroll.tsx` | `cta-band.tsx` has a client-specific default `description` |
| Header and footer | `components/site-header.tsx`, `site-footer.tsx` | Nav logic, current-page highlighting and the mobile menu are generic; the brand strings aren't |
| Content model | Types in `lib/content.ts` (`Treatment`, `TreatmentImage`, `ProductHouse`, `PriceGroup`) | `Treatment` already handles options, add-ons, packages, notes and optional summaries |
| Enquiry API | `app/api/enquiry/route.ts` | Validation, honeypot, per-IP rate limit, Resend delivery, configured entirely by env vars |
| Image pipeline | `scripts/prepare-images.mjs` | The engine is generic; the `images` mapping and source-root constants are per client |
| Design utilities | `app/globals.css` (`fade-to-surface`, `animate-fade-up`, `.ph` placeholder) | Built from theme tokens |
| Security headers | `next.config.mjs` | Generic |

## What's client-specific

Everything below must be replaced for a new client. Find leftovers with `grep -rn "Skin Studio\|Cape Town\|Eversdal\|Bianca" app components lib`.

- **Data:** all of `lib/content.ts` (`practitioner`, `studio`, `treatments`, `studioImages`, `productHouses`, `priceList`).
- **Brand strings hard-coded outside `lib/content.ts`:**
  - `components/site-header.tsx`: logo text and the promo strip ("Complimentary skin consultation…").
  - `components/site-footer.tsx`: brand name, tagline ("A modern skin studio in Cape Town…"), copyright name, "Quietly luxurious skincare".
  - `app/layout.tsx`: `metadata` (title template, description, keywords), `viewport.themeColor`, the fonts.
  - Every page's `metadata` export (mentions the brand and Cape Town).
  - `components/cta-band.tsx`: default `description`.
- **Page copy written directly in the page files:**
  - Home: eyebrow "Cape Town · Skin Studio", hero headline and subcopy, practitioner bio, values strip, "Skin reading first…" cards.
  - About: "Our story" and values.
  - Studio: intro and "What to expect".
  - Treatments: "Before you book".
  - Price list and product houses: intros and notes.
  - Contact: intro, "We reply within one working day", and the **Google Maps embed `src`**.
- **Theme:** colour tokens in `app/globals.css`. The ink colour also appears hard-coded as `rgba(20, 58, 66, …)` in `--color-border`, in `.ph`, and in several `shadow-[…]` arbitrary values in `app/page.tsx`, `app/treatments/page.tsx`, `app/product-houses/page.tsx` and `app/contact/page.tsx`.
- **One-off logic:** `app/treatments/page.tsx` collapses the description only for the slug `bioneedling-spicule-algae`.
- **Assets:** `public/images/**`, the source image folders at the repo root, the `images` mapping in `scripts/prepare-images.mjs`, `Price list.pdf` / `Price list copy.md`.
- **Infrastructure:** Vercel project, domain, `RESEND_API_KEY` / `ENQUIRY_TO_EMAIL` / `ENQUIRY_FROM_EMAIL`, and a verified Resend sender domain.

## Suggested extraction steps

Do this in a new repository (or a `template` branch), never on this client's `main`, which deploys to production.

1. **Centralise brand config.** Add a `lib/site.ts`: brand name, tagline, location, promo strip, footer strapline, default metadata, theme colour, map embed URL and CTA default copy. Make the header, footer, layout, page metadata and `cta-band.tsx` read from it. Use `studio.name` where the name is currently typed out.
2. **Tokenise the remaining colours.** Replace the literal `rgba(20, 58, 66, …)` values with a token (for example `color-mix(in srgb, var(--color-ink) 30%, transparent)` or a `--shadow-card` variable), so a new palette only touches the `@theme` block.
3. **Move page copy into content.** Put the home hero, values, About story and so on into typed objects in `lib/content.ts` (or per-page content files), so pages render only from data.
4. **Generalise the one-off.** Replace the `bioneedling-spicule-algae` check with an optional `collapseDescription?: boolean` on `Treatment`. Consider renaming `treatments` to `services` if the template will serve non-skin businesses.
5. **Make image roots config-driven.** Read source roots from the `images` entries (or a small config) instead of hard-coded constants, and drop the gitignored archival-folder dependency.
6. **Replace content with neutral samples.** Keep two or three example services and one product house, plus `images: []` entries to show the "Image coming soon" placeholder.
7. **Add the missing launch basics.** This site has none yet: `app/icon.png` / favicon, `app/opengraph-image.*`, `app/robots.ts`, `app/sitemap.ts`. Check the current `node_modules/next/dist/docs/` for the file conventions.
8. **Document the client checklist** below in the template's README.

## New-client checklist

- [ ] Business details and approved copy (name, practitioner, address, hours, phone/WhatsApp, email if there is an inbox)
- [ ] Services, prices and add-ons; product ranges they actually stock
- [ ] Palette and fonts; favicon and social share image
- [ ] Photography run through `npm run images:prepare`, with alt text
- [ ] Google Maps embed for the contact page (footer link is derived from the address automatically)
- [ ] Vercel project, domain, and the three enquiry env vars; verify the Resend sender domain
- [ ] A test enquiry to an inbox the client has agreed to
- [ ] Privacy notice: the enquiry form collects personal information. For South African clients, consider POPIA requirements.
- [ ] Remove or confirm every marketing claim (see the claim list in `docs/client-status.md` for the kind of things to check)
