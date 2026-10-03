# Invocation Inc — How to Like People (H2LP)

Lean Next.js sales page for **How to Like People** from **Invocation Inc** (Human Performance Engineers).

Sales copy lives in `src/components/H2LPPage.tsx` and follows the approved copy brief in `~/workspace/h2lp/copy-brief.md`. **Do not invent or rewrite marketing prose.** No testimonials, no bonuses, no guarantees, no refund promises. Manuscript claims are the author's claims.

## Offer

| Offer | Price | Includes | Stripe env |
|---|---|---|---|
| **book** (BOOK) | **$9.99** (999¢) | Ebook: PDF + EPUB | `STRIPE_PRICE_BOOK` |

Checkout product ids: `book` only. One price, printed plain. No list price, no promo code.

**$19.97 is retired** in favor of $9.99. It is not shown as a strike or a comparison. The page does not charge by itself: `/api/checkout` still uses the Price ID in `STRIPE_PRICE_BOOK`. Confirm that Price is $9.99 in Stripe. The old first-100 code was $9.97, not $9.99 — that code is no longer advertised.

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
