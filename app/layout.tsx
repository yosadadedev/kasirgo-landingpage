import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kasirgo.co.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KasirGo - Aplikasi Kasir & POS untuk UMKM, Mudah & Praktis",
  description: "Aplikasi kasir & POS untuk UMKM: kelola penjualan, stok, dan laporan keuangan. Cocok untuk toko, warung, dan kedai. Bisa offline, mulai gratis.",
  keywords: [
    "aplikasi kasir",
    "kasir digital",
    "pos gratis",
    "point of sale",
    "kasir online",
    "aplikasi toko",
    "manajemen stok",
    "laporan keuangan",
    "umkm",
    "kasirgo+"
  ],
  authors: [{ name: "KasirGo" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KasirGo - Aplikasi Kasir Digital & POS untuk UMKM",
    description: "Kelola penjualan, stok barang, dan keuangan dengan aplikasi kasir KasirGo. Sistem POS terbaik untuk HP, tablet, dan laptop — mudah & praktis dipakai.",
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "KasirGo",
  },
  twitter: {
    card: "summary_large_image",
    title: "KasirGo - Aplikasi Kasir Digital & POS untuk UMKM",
    description: "Aplikasi kasir digital dan POS untuk UMKM Indonesia, mudah & praktis dipakai.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KasirGo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  description:
    "Aplikasi kasir digital dan POS (Point of Sale) untuk UMKM Indonesia — kelola penjualan, stok barang, dan keuangan usaha. Offline-first, bisa mulai gratis kapan saja.",
  url: siteUrl,
  downloadUrl: "https://play.google.com/store/apps/details?id=com.yl.kasirgo",
  installUrl: "https://play.google.com/store/apps/details?id=com.yl.kasirgo",
  publisher: {
    "@type": "Organization",
    name: "Yosada Labs",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "218",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KasirGo",
  alternateName: ["KasirGo Aplikasi Kasir UMKM", "kasirgo.co.id"],
  url: `${siteUrl}/`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, jsonLd]) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
