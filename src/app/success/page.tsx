import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/products";

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
          Both editions are ready right now — download them below and keep them
          forever. Check your email for the Stripe receipt.
        </p>
        <div className="lf-cta">
          <a
            className="lf-btn lf-btn-red"
            href="/downloads/h2lp.pdf"
            download="How-to-Like-People.pdf"
          >
            Download the PDF
          </a>
          <a
            className="lf-btn lf-btn-ghost"
            href="/downloads/h2lp.epub"
            download="How-to-Like-People.epub"
          >
            Download the EPUB
          </a>
          <p className="lf-tiny">
            PDF for print and desktop; EPUB for e-readers, phones, and tablets.
          </p>
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
