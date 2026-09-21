# Invocation Inc — How to Like People (H2LP)

Lean Next.js sales page for **How to Like People** from **Invocation Inc** (Human Performance Engineers).

Sales copy lives in `src/components/H2LPPage.tsx` and follows the approved copy brief in `~/workspace/h2lp/copy-brief.md`. **Do not invent or rewrite marketing prose.** No testimonials, no bonuses, no guarantees, no refund promises. Manuscript claims are the author's claims.

## Offer

| Offer | Charge | List | Includes | Stripe env |
|---|---|---|---|---|
| **book** (BOOK) | **$19.97** (1997¢) | $39.97 | Ebook: PDF instantly + EPUB when formatting is done | `STRIPE_PRICE_BOOK` |

Checkout product ids: `book` only. Promotion codes enabled — first-100 launch code **H2LP100** ($19.97 → $9.97) is advertised on the page.

## Deliverables

- `public/downloads/h2lp.pdf` — the full book (96 pp, letter), built from `~/workspace/h2lp/manuscript-v1.0.txt` via the kept build script `.src/build_pdf.py`. Re-run the script and re-render with the artifacts skill (`render_audit.mjs` + `validate_pdf.sh`) to regenerate.
- EPUB: buyers leave an email (source `h2lp-epub`) to be notified when formatting is done.

## Env

See `.env.example`. Required for live checkout: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_BOOK`, `NEXT_PUBLIC_SITE_URL`.

## Dev

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build
```
