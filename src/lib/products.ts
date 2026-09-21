/**
 * H2LP offer — the ebook, direct from the author.
 * PDF + EPUB. Do not hardcode Stripe Price IDs; wire them via env.
 */

export type ProductId = "book";

export interface Product {
  id: ProductId;
  name: string;
  shortName: string;
  description: string;
  /** Charge price shown on buttons. */
  priceDisplay: string;
  priceCents: number;
  /** List / strike price when different from charge price. */
  listPriceDisplay?: string;
  listPriceCents?: number;
  /** Env var name holding the Stripe Price ID for this offer. */
  stripePriceEnvKey: "STRIPE_PRICE_BOOK";
  /**
   * Optional Stripe Payment Link. Leave empty to use /api/checkout.
   * Prefer API checkout + env Price IDs.
   */
  paymentLinkUrl: string;
  features: string[];
  highlighted?: boolean;
}

export const brand = {
  name: "Invocation Inc",
  legalName: "Invocation Inc",
  shortName: "Invocation",
  role: "Human Performance Engineers",
  tagline: "Invoke a better you.",
  mechanismLine: "Eye contact. Smile. Go meet someone.",
  bookTitle: "How to Like People",
  bookAbbrev: "H2LP",
  siteUrlFallback: "http://localhost:3000",
  paper: "#f3eadc",
  ink: "#140e0c",
  red: "#d10f28",
} as const;

/** First-100 launch code: $19.97 -> $9.97 at checkout (enter at payment step). */
export const LAUNCH_CODE = "H2LP100";

export const products: Product[] = [
  {
    id: "book",
    name: "How to Like People — Ebook",
    shortName: "The Ebook",
    description: "The complete book. PDF available instantly; EPUB edition in final formatting, emailed to buyers.",
    priceDisplay: "$19.97",
    priceCents: 1997,
    listPriceDisplay: "$39.97",
    listPriceCents: 3997,
    stripePriceEnvKey: "STRIPE_PRICE_BOOK",
    paymentLinkUrl: "",
    highlighted: true,
    features: ["Book PDF — instant download", "EPUB edition — emailed when formatting is done"],
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function isValidProductId(id: string): id is ProductId {
  return id === "book";
}

export const bookProduct = getProduct("book")!;
