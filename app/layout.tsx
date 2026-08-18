import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Janne Lappi — Business student & AI builder",
  description:
    "Business student at Aalto Information and Service Management, Head of Finance at VES. Building products with AI — LinkdPhoto, Myötä, and more.",
  metadataBase: new URL("https://jannelappi.com"),
  openGraph: {
    title: "Janne Lappi — Business student & AI builder",
    description:
      "Business student at Aalto Information and Service Management, Head of Finance at VES. Building products with AI — LinkdPhoto, Myötä, and more.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janne Lappi — Business student & AI builder",
    description:
      "Business student at Aalto Information and Service Management, Head of Finance at VES. Building products with AI — LinkdPhoto, Myötä, and more.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
