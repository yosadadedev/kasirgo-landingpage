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

const siteUrl = "https://kasirgoplus.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KasirGo+ - Aplikasi Kasir Digital & POS untuk UMKM, Mudah & Praktis",
  description: "KasirGo+ adalah aplikasi kasir digital dan POS (Point of Sale) untuk mengelola penjualan, stok barang, dan keuangan usaha Anda. Cocok untuk toko, warung, kulakan, dan UMKM Indonesia. Offline-first, aman, dan bisa mulai gratis kapan saja.",
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
  authors: [{ name: "KasirGo+" }],
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KasirGo+ - Aplikasi Kasir Digital & POS untuk UMKM",
    description: "Kelola penjualan, stok barang, dan keuangan dengan aplikasi kasir KasirGo+. Sistem POS terbaik untuk HP, tablet, dan laptop — mudah & praktis dipakai.",
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "KasirGo+",
    images: [
      {
        url: "/kasir-screen.jpeg",
        width: 575,
        height: 1280,
        alt: "Tampilan aplikasi KasirGo+",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KasirGo+ - Aplikasi Kasir Digital & POS untuk UMKM",
    description: "Aplikasi kasir digital dan POS untuk UMKM Indonesia, mudah & praktis dipakai.",
    images: ["/kasir-screen.jpeg"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KasirGo+",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android",
  description:
    "Aplikasi kasir digital dan POS (Point of Sale) untuk UMKM Indonesia — kelola penjualan, stok barang, dan keuangan usaha. Offline-first, bisa mulai gratis kapan saja.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    ratingCount: "62",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
