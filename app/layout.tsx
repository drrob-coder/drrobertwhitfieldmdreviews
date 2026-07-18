import type { Metadata } from "next";
import { DOCTOR } from "@/lib/data";
import "./globals.css";

const SITE_URL = "https://www.drrobertwhitfieldmdreviews.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${DOCTOR.name} — Verified Patient Reviews, Testimonials & Stories`,
  description: `Read verified patient reviews, watch video testimonials, and hear full patient stories about ${DOCTOR.name}, board-certified plastic surgeon and breast implant illness / explant specialist in Austin, Texas.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${DOCTOR.name} — Verified Patient Reviews & Testimonials`,
    description:
      "Aggregated verified reviews, video testimonials, and full patient stories.",
    url: SITE_URL,
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
