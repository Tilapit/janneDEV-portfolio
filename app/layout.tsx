import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const title = "Janne Lappi";
const description =
  "Business student at Aalto. Head of Finance at VES. Builder at Mindy.";
const ogImage = {
  url: "/images/monolith/turn08.jpg",
  width: 1440,
  height: 810,
};

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://jannelappi.com"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={schibsted.className}>{children}</body>
    </html>
  );
}
