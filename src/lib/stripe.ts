import Stripe from "stripe";
import type { ProductId } from "./products";
import { getProduct } from "./products";

/** Every H2LP checkout charges this amount. $19.97 is retired. */
export const BOOK_PRICE_CENTS = 999;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

type PriceLike = {
  id: string;
  unit_amount: number | null;
  currency: string;
  type: string;
};

/** Active one-time USD price at $9.99. */
export function matchingBookPrice<T extends PriceLike>(prices: T[]): T | undefined {
  return prices.find(
    (price) =>
      price.unit_amount === BOOK_PRICE_CENTS &&
      price.currency === "usd" &&
      price.type === "one_time"
  );
}

/**
 * Price used at checkout. Prefer STRIPE_PRICE_BOOK when it is already $9.99.
 * If it still points at the retired $19.97 Price, use the active $9.99 Price
 * on that same product. Never return a different amount.
 */
export async function resolveBookPriceId(stripe: Stripe): Promise<string | null> {
  const configured = process.env.STRIPE_PRICE_BOOK;
  if (!configured) return null;

  const configuredPrice = await stripe.prices.retrieve(configured);
  const direct = matchingBookPrice([configuredPrice]);
  if (direct) return direct.id;

  const product =
    typeof configuredPrice.product === "string"
      ? configuredPrice.product
      : configuredPrice.product.id;

  const listed = await stripe.prices.list({
    product,
    active: true,
    limit: 100,
  });

  return matchingBookPrice(listed.data)?.id ?? null;
}

/** True when a secret key exists. Per-product Price IDs are checked separately. */
export function isCheckoutConfigured(productId?: ProductId): boolean {
  if (!process.env.STRIPE_SECRET_KEY) return false;
  if (!productId) {
    return Boolean(process.env.STRIPE_PRICE_BOOK);
  }
  return Boolean(getStripePriceId(productId));
}

export function getStripePriceId(productId: ProductId): string | null {
  const product = getProduct(productId);
  if (!product) return null;
  const priceId = process.env[product.stripePriceEnvKey];
  return priceId || null;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
