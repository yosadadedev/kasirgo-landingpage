import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 relative bg-[#905694] rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                <Image
                  src="/kasirgoplus-icon.svg"
                  alt="KasirGo Logo"
                  fill
                  className="object-contain scale-[0.8]"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Kasir<span className="text-[#905694]">Go</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Aplikasi kasir digital & POS untuk UMKM Indonesia. Kelola penjualan, stok barang,
              dan keuangan usaha Anda dengan mudah. Offline-first, aman, dan bisa mulai gratis kapan saja.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.yl.kasirgo&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Image
                  src="/google-play-store-icon.svg"
                  alt="Google Play"
                  width={36}
                  height={36}
                />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-gray-500">Download di</span>
                  <span className="text-lg font-bold text-gray-800">Play Store</span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Produk</h4>
            <ul className="space-y-3">
              {[
                { name: "Fitur", href: "#fitur" },
                { name: "Cara Pakai", href: "#cara-pakai" },
                { name: "Harga", href: "#harga" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Hubungi Kami</h4>
            <ul className="space-y-5">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b7fd4] mb-1">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/62859106610011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  0859-1066-10011
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b7fd4] mb-1">
                  Email
                </span>
                <a
                  href="mailto:halokasirgo@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  halokasirgo@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b7fd4] mb-1">
                  Alamat
                </span>
                <span className="block text-gray-400 leading-relaxed">
                  Jl. Mijil, Gedongan, Bangunjiwo, Kec. Kasihan, Kabupaten Bantul,
                  Daerah Istimewa Yogyakarta 55184
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} KasirGo. Dibuat dengan ❤️ untuk UMKM Indonesia oleh{" "}
            <a
              href="https://play.google.com/store/apps/developer?id=Yosada+Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Yosada Labs
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-[#905694] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.6h-3.24v13.65c0 1.62-1.31 2.94-2.94 2.94a2.94 2.94 0 01-2.94-2.94 2.94 2.94 0 012.94-2.94c.31 0 .6.05.88.13V9.7a6.2 6.2 0 00-.88-.06 6.18 6.18 0 00-6.18 6.18A6.18 6.18 0 009.02 22a6.18 6.18 0 006.18-6.18V8.75a9.4 9.4 0 005.5 1.76V7.28a5.68 5.68 0 01-4.1-1.46z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
