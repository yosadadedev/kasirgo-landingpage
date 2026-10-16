"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Kenapa", href: "#kenapa" },
    { name: "Fitur", href: "#fitur" },
    { name: "Cara Pakai", href: "#cara-pakai" },
    { name: "FAQ", href: "#faq" },
    { name: "Harga", href: "#harga" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative bg-[#905694] rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
              <Image
                src="/kasirgoplus-icon.svg"
                alt="KasirGo Logo"
                fill
                className="object-contain scale-[0.8]"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Kasir<span className="text-[#905694]">Go</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.yl.kasirgo&hl=id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-full transition-all font-medium text-base shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Image
                src="/google-play-store-icon.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              <span className="hidden sm:inline">Download di Play Store</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-1 border-t border-gray-100 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2.5 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
