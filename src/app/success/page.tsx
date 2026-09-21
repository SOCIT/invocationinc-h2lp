import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/products";
import { EpubNotify } from "@/components/EpubNotify";

export const metadata: Metadata = {
  title: "Purchase complete",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <>
      <Header />
      <main className="inner-page lf-wrap" style={{ paddingBottom: 48 }}>
        <p className="lf-stamp">Payment confirmed. Welcome, operator.</p>
        <h1>Your copy of {brand.bookTitle}</h1>
        <p>
          The PDF is ready right now — download it below and keep it forever.
          Check your email for the Stripe receipt.
        </p>
        <div className="lf-cta">
          <a
            className="lf-btn lf-btn-red"
            href="/downloads/h2lp.pdf"
            download="How-to-Like-People.pdf"
          >
            Download the PDF
          </a>
          <p className="lf-tiny">
            The EPUB edition is in final formatting. Leave your email and it lands
            in your inbox free the moment it&apos;s done.
          </p>
          <EpubNotify />
        </div>
        {sessionId && (
          <p className="lf-tiny" style={{ color: "var(--soft)" }}>
            Session: {sessionId}
          </p>
        )}
        <p>
          <Link href="/">Back to home</Link>
        </p>
        <Footer />
      </main>
    </>
  );
}
