import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { brand } from "@/lib/products";

export const metadata: Metadata = {
  title: {
    default: `${brand.bookTitle} — ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "How to Like People from Invocation Inc. A field manual for social fluency: a genuine smile on command, a conversation structure that never runs dry, and a five-second mental-prep method. Not charm school. Not pickup-artist.",
  openGraph: {
    title: `${brand.bookTitle} — ${brand.name}`,
    description:
      "How to Like People — a blunt field manual for social fluency. Ebook $19.97 direct from the author.",
    siteName: brand.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
