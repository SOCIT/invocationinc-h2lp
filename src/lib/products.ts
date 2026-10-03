/**
 * H2LP offer — the ebook, direct from the author.
 * One price: $9.99. PDF + EPUB. Do not hardcode Stripe Price IDs; wire them via env.
 * $19.97 is retired. No list price, no promo code.
 */

export type ProductId = "book";

export interface Product {
  id: ProductId;
  name: string;
  shortName: string;
  description: string;
  /** Charge price shown on the page. One price. No strike. */
  priceDisplay: string;
  priceCents: number;
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

export const products: Product[] = [
  {
    id: "book",
    name: "How to Like People — Ebook",
    shortName: "The Ebook",
    description: "The complete book. PDF + EPUB, available instantly.",
    priceDisplay: "$9.99",
    priceCents: 999,
    stripePriceEnvKey: "STRIPE_PRICE_BOOK",
    paymentLinkUrl: "",
    highlighted: true,
    features: ["Book PDF — instant download", "EPUB edition — instant download"],
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function isValidProductId(id: string): id is ProductId {
  return id === "book";
}

export const bookProduct = getProduct("book")!;
