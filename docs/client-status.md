# Client status: Skin Studio Aesthetics

Last updated: 16 Oct 2026. Bianca is expected to release the site as it is now. Keep this file current whenever she confirms or changes something.

Client: **Bianca Mc Cree**, Dermal Esthetician, Eversdal, Cape Town. Feedback comes through the maintainer. Write messages to Bianca in Afrikaans: a friendly summary of changes plus a numbered list of what's still needed.

## Approved: don't change without sign-off

- `practitioner` and `studio` in `lib/content.ts` (name, title, WhatsApp, phone, address, hours).
- The treatment catalogue and prices in `lib/content.ts`. They came from her price list (`Price list.pdf` / `Price list copy.md` at the repo root), with the later updates below.
- The PRX-PLUS opening wording (16 Oct): "a bio-revitaliser without the needles that works to stimulate collagen at a cellular level". We changed her "from a cellular level" to "at a cellular level" for grammar.
- Pixel Biothermic prices (16 Oct): R1,850 per session (face and neck); spot treatment from R400 per area.

## Waiting on Bianca

1. **PRX-PLUS**
   - Confirm it's a WiQo product. The copy currently says "WiQo's PRX-PLUS Skin Booster & Brightening Gel".
   - Which homecare cream she recommends. The protocol says "Barrier-repair homecare between sessions".
   - Whether to show maintenance sessions (every 45 days).
   - Confirm the course price of R6,290 for 4 sessions. We calculated it from her 15% discount.
   - Supplier notes: `images 14 Oct 2026/PRX-PLUS-description.md` (reference only, never copy word for word).
2. **iS Clinical**
   - Are the four featured products (Super Serum Advance+, Youth Complex, Cleansing Complex, Active Serum) right?
   - Does she stock the range?
   - The `/product-houses` meta description still lists only the original six houses. Add iS Clinical once she confirms.
3. **Alternate home banner** (gloved facial treatment): use it or not? It's already converted in `public/images/banners/gloved-facial-treatment-*.webp`.
4. **Prices still shown as "Enquire for pricing"**: Mesotherapy, and the "Customised peel" add-on (Basic Deep Cleanse Facial).
5. **Pixel Biothermic Skin Rejuvenation**
   - The final description. The current copy is a placeholder rewritten from her Facebook post: "controlled warmth" through a fine-pin handpiece that may help collagen, texture, firmness and fine lines.
   - Any packages or course options.
   - The image (added 14 Oct) and prices (added 16 Oct) are done.
6. **About page**
   - Approve, or send her own version of, the placeholder "Our story" text (commit `a54b356`).
   - A longer bio for "Led by Bianca Mc Cree" (currently one sentence).
7. **Claims inherited from the original v0 template, not from Bianca.** We sent her a 14-point list in Afrikaans. When she answers, update every occurrence (grep the phrase):
   - **Complimentary consultation/skin reading for new guests.** Appears in the header promo strip ("consultation"), the `cta-band.tsx` default description, the contact intro and metadata, the treatments "Before you book" section, the price-list intro, the product-houses "Retail is by consultation" section, and the About and Studio CTAs ("skin reading"). Also ask which word she prefers.
   - "We reply to every enquiry within one working day" (contact).
   - A written home routine and aftercare included (home, product houses).
   - "Clear pricing, no surprises" (price list).
   - "Appointments are spaced / unhurried" (about, studio).
   - "Our team" / "a team that listens". She may be a solo practitioner.
   - "Every visit starts with a skin reading" (home, studio, treatments).
   - "No upselling / Zero pressure / we'll tell you if it's not right" (about, home).
   - "We only recommend products after seeing your skin" (product houses).
   - Home values strip: "Medical-Grade / Cruelty-Free / Bespoke Rituals / Zero Downtime / Quiet Luxury". We recommended removing "Zero Downtime" and "Cruelty-Free".
   - "Medical-grade only" products and devices (home).
   - That she retails all seven product houses.
   - Softening strong claims in her own treatment copy: Bio-Needling ("heals acne", "100% natural and safe for all skin tones", "up to 3,000%"), DermaPen ("clinically proven"), HIFU ("no downtime"), Jet Plasma (results lasting "up to 5 years").

## Open technical checks

- **Enquiry email.** Confirm `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` are set in Vercel Production. Without them the form shows "Thank you" but sends nothing (an earlier commit noted "no inbox yet"). Don't send a test enquiry that could reach Bianca without asking the maintainer first.
- `studio.email` is commented out on the contact page and in the footer until an inbox exists.
- `studio.instagram` is a placeholder (`https://instagram.com`) and isn't rendered anywhere yet.
- No favicon, social share (Open Graph) image, `robots.txt` or sitemap yet. Worth adding around release; see `docs/template-extraction.md`, step 7.

## Change log (recent)

| Date | Change |
| --- | --- |
| 16 Oct 2026 | Map link under the footer address; README, agent guide and these docs |
| 16 Oct 2026 | Treatment enquiry links scroll to the enquiry form (`#enquiry`) |
| 16 Oct 2026 | Mobile menu highlights the current page |
| 16 Oct 2026 | Studio page: even 24px image spacing; space above the CTA |
| 16 Oct 2026 | Smooth bottom fade on treatment card images |
| 16 Oct 2026 | `/treatments#<slug>` deep links, including short hashes like `#PRX-PLUS` |
| 16 Oct 2026 | PRX-PLUS description per Bianca; summary removed; Pixel prices |
| 14 Oct 2026 | Thalgo and Pixel images; Pixel placeholder treatment; About story placeholder; Peels and DermaPen images; PRX-PLUS pricing |
| 14 Oct 2026 | New home banner and headline; iS Clinical product house; PRX-PLUS treatment |

Run `git log` for the full history.
