# Skin Studio Aesthetics website

Marketing site for **Skin Studio Aesthetics**, the private skin studio of Bianca Mc Cree (Dermal Esthetician) in Eversdal, Cape Town.

- Production: <https://www.skinstudioaesthetics.co.za> (custom domain) and <https://skinstudioaestheticsvercelcoza.vercel.app>
- Repository: `henry0022/skinstudioaesthetics.vercel.co.za`
- Hosting: Vercel. **Every push to `main` deploys to production.** There is no staging branch.

> Working with an AI agent? Start with [AGENTS.md](./AGENTS.md). Client sign-off status lives in [docs/client-status.md](./docs/client-status.md), and the guide for reusing this site for another client is [docs/template-extraction.md](./docs/template-extraction.md).

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack). This version has breaking changes. Read `node_modules/next/dist/docs/` before using an unfamiliar API. |
| UI | React 19, Tailwind CSS v4 (CSS-first config in `app/globals.css`), `lucide-react` icons |
| Language | TypeScript (strict type-check runs during `next build`) |
| Fonts | Jost (sans) and Cormorant Garamond (serif) via `next/font/google` |
| Images | `next/image`. Source PNGs are converted to WebP with `scripts/prepare-images.mjs` (uses `sharp`) |
| Enquiries | `app/api/enquiry/route.ts` sends email through the Resend HTTP API |
| Package manager | Vercel installs with **pnpm** (`pnpm-lock.yaml`). Locally, `npm` works fine. Don't commit a `package-lock.json`. |

## Getting started

```bash
npm install          # or pnpm install
npm run dev          # http://localhost:3000
npm run build        # production build + type-check. Run before every push.
npm run start        # serve the production build locally
npm run images:prepare   # regenerate WebP images (see "Images" below)
```

`npm run lint` is defined, but ESLint isn't installed, so it won't run. `npm run build` is the gate.

Copy `.env.example` to `.env.local` if you need to test email delivery locally. Without those variables the enquiry API just logs enquiries to the console.

## Deployment

1. `npm run build` must pass.
2. Commit to `main` and push. Vercel builds and deploys automatically.
3. Confirm the deployment: `gh api repos/henry0022/skinstudioaesthetics.vercel.co.za/commits/<sha>/status` and check that `state` is `success`.
4. Check the live page (for example, `curl -sL https://www.skinstudioaesthetics.co.za/treatments`) for the new content.

## Project structure

```text
app/
  layout.tsx            Root layout: fonts, site metadata, header and footer
  globals.css           Tailwind v4 theme tokens (colours, fonts) and custom utilities
  page.tsx              Home: art-directed hero banner, practitioner bio, featured treatments, values, product houses
  about/ studio/ treatments/ price-list/ product-houses/ contact/
  api/enquiry/route.ts  POST handler: validation, honeypot, per-IP rate limit, Resend email
components/
  site-header.tsx       Promo strip, sticky nav, mobile menu (current page highlighted)
  site-footer.tsx       Explore links, address (+ map link), hours, phone
  page-intro.tsx        Shared page title band
  cta-band.tsx          Shared call-to-action box (has no top padding; see AGENTS.md)
  enquiry-form.tsx      Client form; pre-selects ?treatment=<slug>
  treatment-hash-scroll.tsx  Resolves short/mixed-case hashes such as /treatments#PRX-PLUS
lib/content.ts          ALL structured content: practitioner, studio, treatments, studio images, product houses, price list
scripts/prepare-images.mjs  Source PNG → WebP pipeline and image manifest
public/images/          Generated WebP output (committed) + image-manifest.json
images 14 Oct 2026/, Skinstudio Aesthetics Website Images - Product Images (3-10-2026)/
                        Committed source images from the client
docs/                   Client status and template-extraction notes
```

## Editing content

Almost everything lives in [`lib/content.ts`](./lib/content.ts):

- **`practitioner`** and **`studio`**: approved identity and contact details. Don't change them without the client's sign-off.
- **`treatments`** (`Treatment[]`): one entry drives the treatments page, the price list (`priceList` wraps `treatments`), the enquiry form dropdown and the home page featured cards (`treatments.slice(0, 3)`). `summary` is optional. Each card has `id={slug}`, so `/treatments#<slug>` deep-links to it.
- **`studioImages`**, **`productHouses`**: studio photography and retail ranges.

Page-specific copy (home hero, bio, values strip, About story, Studio "What to expect", and so on) is written directly in the page files under `app/`.

## Images

1. Put the client's source PNGs in a dated folder at the repo root (for example, `images 14 Oct 2026/`) and commit them.
2. Register each file in `scripts/prepare-images.mjs`: `source`, `output` (under `public/images/`), `maxLongEdge` (1200 for treatments), `use`, and `sourceRoot`. A new dated folder needs a root constant **and** an entry in the `findPngFiles` list in `main()`.
3. Run `npm run images:prepare`. It converts to WebP, validates the output, regenerates `public/images/{treatments,studio,banners}/` from scratch and rewrites `image-manifest.json`.
4. Use the generated width and height from the manifest in `lib/content.ts`, with descriptive alt text.

Two catches:

- The script refuses to run if any PNG in a source folder isn't registered.
- The original master folder `Skinstudio Aesthetics Website Images-20260915T064914Z-1-001/` is **gitignored**. It only exists on the original maintainer's machine. On a fresh clone the script fails on purpose (`ENOENT`) before it deletes anything. The committed WebP files in `public/images/` are all the build needs. If you have to regenerate, get that folder from the maintainer first.

`sharp` isn't a direct dependency. It's available through Next.js. If `images:prepare` reports it missing, run `npm i -D sharp`.

## Enquiry email

`POST /api/enquiry` needs these environment variables in Vercel (Production):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries |
| `ENQUIRY_FROM_EMAIL` | Verified sender, for example `Skin Studio Aesthetics <enquiries@…>` |

If any of them is missing, the route still returns `{ ok: true }` and only logs the enquiry, so the visitor sees "Thank you" but **no email is sent**. Whether these are set in production hasn't been confirmed yet (see [docs/client-status.md](./docs/client-status.md)). Don't send test enquiries that could reach the client without asking first.
