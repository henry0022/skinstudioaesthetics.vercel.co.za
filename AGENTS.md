<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent guide: Skin Studio Aesthetics

The block above is managed by Next.js. Leave it in place and write project notes below it; `next dev` only rewrites the text between its markers.

## Read first

1. [README.md](./README.md): stack, commands, structure, image pipeline, enquiry email.
2. [docs/client-status.md](./docs/client-status.md): what the client (Bianca) has approved, what's still a placeholder, and the open questions. **Check it before changing any copy.**
3. [docs/template-extraction.md](./docs/template-extraction.md): which parts are client-specific if this site becomes a template.
4. `node_modules/next/dist/docs/` for any Next.js API you're not sure about (Next 16 differs from older versions).

## How the maintainer works

- Client feedback arrives through the maintainer. Make focused changes that do exactly what was asked.
- Run `npm run build` before every push. It type-checks; ESLint isn't installed, so `npm run lint` doesn't work.
- **Commit and push to `main` only when asked.** A push deploys to production immediately. When the maintainer only wants to *see* something, run it locally (`npm run dev`) and don't push.
- Commits get a `Co-authored-by:` trailer for the agent.
- After a push, verify both the deployment status and the live page (recipes below).
- Messages to Bianca are written in **Afrikaans**: a friendly summary of what changed plus a numbered list of what's still needed from her.
- Screenshots are expensive. Prefer measuring with `page.evaluate` (positions, computed styles, sampled pixel values) and take at most one targeted screenshot when a visual check really helps. The maintainer often checks visuals personally.

## Content rules (non-negotiable)

- `practitioner` and `studio` in `lib/content.ts` are approved. Don't change them without sign-off. Derive values from them instead; for example, `studioMapHref` is built from `studio.address`.
- Never invent facts about the client or the business (years of experience, qualifications, team size, offers, stock). Use clearly placeholder wording and add it to `docs/client-status.md`.
- Never paste supplier or web copy word for word. Rewrite it in the tone of the existing treatments: short summary, one or two paragraphs, optional "Recommended protocol"-style lists.
- South African/British spelling (personalised, colour). Use cautious wording ("may help", "we confirm suitability at a consultation") and no medical guarantees. When the client supplies wording, keep her meaning but fix grammar ("at a cellular level", not "from a cellular level"), and mention any change you made.
- Prices are written like `R1,850` or `From R400`. Use `'Enquire for pricing'` when a price is unknown.
- When a claim is confirmed or withdrawn, grep for **every** place it appears. Many claims are repeated across pages (see the list in `docs/client-status.md`).

## Adding or editing a treatment

1. Edit `treatments` in `lib/content.ts`. Order is mostly alphabetical; newer entries were appended at the end. The first three appear on the home page.
2. The treatments page, price list, enquiry dropdown and home cards update automatically.
3. Images go through the pipeline (README → Images). Put the strongest image first; only `images[0]` is shown as the card cover.
4. `images: []` shows an "Image coming soon" placeholder.
5. `/treatments#<slug>` deep-links to the card. Short or mixed-case hashes (`#PRX-PLUS`, `#pixel`) are resolved by `components/treatment-hash-scroll.tsx`.

## UI patterns and gotchas

- **Sticky header:** any in-page anchor target needs `scroll-mt-28`, or it lands under the header (used on treatment cards and `#enquiry` on the contact page).
- **Treatment enquiry links** go to `/contact?treatment=<slug>#enquiry`. The query pre-selects the dropdown and the hash scrolls "Leave us a message:" to the top.
- **`CtaBand` has no top padding.** It relies on the previous section's bottom padding. After a full-width background band, wrap it in `<div className="pt-24">` (as on Studio and Product Houses).
- **Image fades:** `fade-to-surface` (in `globals.css`) is a smoothstep gradient into the card colour. The overlay hangs 2px below the image (`-bottom-0.5 h-[calc(2rem+2px)]`) and the image wrapper has no `overflow-hidden`. Image boxes end on fractional pixels (e.g. 469.33px). If the overlay is clipped at the same edge, the photo's anti-aliased last row shows as a grey line.
- **Colours** come from Tailwind v4 theme tokens in `app/globals.css` (`--color-surface`, `--color-muted`, `--color-accent`, …). Use the token utilities (`bg-surface`, `text-accent`) instead of hex values. `text-accent` is the AA-safe variant for small text on light backgrounds.
- **Current page in nav:** both menus use `usePathname()` and set `aria-current="page"`. The mobile menu shows a `bg-muted` pill.
- **Collapsible details:** `app/treatments/page.tsx` collapses the long description for `bioneedling-spicule-algae` only, keyed on the slug.

## Windows / PowerShell notes (maintainer's machine)

- `git push` writes to stderr, which PowerShell reports as an error even when it succeeds. Use `git push -q origin main 2>$null`, then confirm with `git log --oneline -1 origin/main`.
- Use the `&&`-free PowerShell 5 syntax: chain with `;` and `if ($?) { … }`.
- `gh api … --jq` quoting breaks in PowerShell. Pipe to `ConvertFrom-Json` instead.
- `curl.exe -sL <url>` returns an array of lines. Join it (`-join "`n"`) before using `.Contains()` or `.Length`.
- `$home` is a read-only automatic variable. Don't use it as a variable name.
- Don't start `next start` while `next build` is still running ("Could not find a production build"). Stop the dev server before building.

## Verification recipes

```powershell
# Deployment status for the pushed commit
$sha = git rev-parse --short origin/main
gh api repos/henry0022/skinstudioaesthetics.vercel.co.za/commits/$sha/status | ConvertFrom-Json | Select-Object state

# Live page contains the new copy
$h = (curl.exe -sL https://www.skinstudioaesthetics.co.za/treatments) -join "`n"
$h.Contains('expected text')
```

For layout checks, run a local production build (`npm run build`, then `npx next start -p 3000`). Measure with the browser (`getBoundingClientRect`, `getComputedStyle`), then stop the server.

