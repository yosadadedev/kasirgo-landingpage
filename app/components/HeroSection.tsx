import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#905694]/5 via-white to-[#905694]/3" />
      <div className="absolute top-16 right-40 w-[32rem] h-[32rem] bg-[#905694]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-6 lg:space-y-7">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#905694]/5 border border-[#905694]/10 rounded-full text-[14px] font-medium text-purple-700">
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              100% Gratis · Open Source · Made in Indonesia 🇮🇩
            </div> */}

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-gray-900 leading-[0.95] tracking-tight">
                Aplikasi Kasir untuk UMKM, Mudah &{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-purple-600 font-extrabold">Praktis</span>
                  <span className="absolute bottom-0.5 left-0 w-full h-2.5 bg-yellow-300/75 -z-0 rounded-sm" />
                </span>{" "}
                Dipakai
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Kelola penjualan, stok barang, dan keuangan dengan aplikasi kasir gratis{" "}
              <strong>KasirGo</strong>. Sistem POS (Point of Sale) terbaik untuk HP, tablet, dan laptop — offline-first, mulai gratis kapan saja.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.yl.kasirgo&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#905694] hover:bg-[#794A80] text-white rounded-full transition-all font-semibold text-base shadow-[0_14px_30px_-12px_rgba(144,86,148,0.55)] hover:shadow-[0_16px_35px_-12px_rgba(144,86,148,0.7)] hover:-translate-y-0.5"
              >
                Coba KasirGo Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#fitur"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 rounded-full transition-all font-semibold text-base shadow-sm"
              >
                Lihat Fitur
              </a>
            </div>

            <div className="pt-1">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-sm bg-gradient-to-br from-blue-400 to-indigo-500"
                    >
                      {["🛍️", "☕", "🍱", "📦", "💼"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-gray-700 text-sm">
                    <span className="text-purple-600 font-bold">41.400</span> pemilik usaha telah bergabung
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Mudah & praktis
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Harga terjangkau
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Ramah UMKM
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[11rem] sm:max-w-[17rem] md:max-w-[17.5rem] aspect-[9/19] mx-auto">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[34%] sm:-left-[48%] md:-left-[44%] w-[68%] sm:w-[78%] max-w-[13rem] aspect-[9/19] z-0 transition-all hover:scale-[1.02] duration-500 saturate-[1.03]">
                  <div className="relative w-full h-full bg-gray-900 rounded-[2.1rem] p-1 sm:p-1.5 shadow-xl shadow-gray-900/25">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[0.85rem] sm:w-20 sm:h-[1.15rem] bg-gray-900 rounded-b-[0.8rem] z-30" />
                    <div className="relative w-full h-full overflow-hidden rounded-[1.65rem] bg-white">
                      <Image
                        src="/trnasaksi-screen.jpg"
                        alt="Tampilan Transaksi KasirGo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 639px) 120px, 208px"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-[34%] sm:-right-[48%] md:-right-[44%] w-[68%] sm:w-[78%] max-w-[13rem] aspect-[9/19] z-0 transition-all hover:scale-[1.02] duration-500 saturate-[1.03]">
                  <div className="relative w-full h-full bg-gray-900 rounded-[2.1rem] p-1 sm:p-1.5 shadow-xl shadow-gray-900/25">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[0.85rem] sm:w-20 sm:h-[1.15rem] bg-gray-900 rounded-b-[0.8rem] z-30" />
                    <div className="relative w-full h-full overflow-hidden rounded-[1.65rem] bg-white">
                      <Image
                        src="/report-screen.jpg"
                        alt="Tampilan Laporan Keuangan KasirGo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 639px) 120px, 208px"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative rounded-[2.3rem] w-full h-full z-20 scale-100 shadow-[0_18px_38px_-12px_rgba(0,0,0,0.35)]">
                  <div className="relative w-full h-full bg-gray-900 rounded-[2.35rem] p-1.5 shadow-2xl shadow-gray-900/45">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[0.95rem] sm:w-24 sm:h-[1.3rem] bg-gray-900 rounded-b-[0.9rem] z-30" />
                    <div className="relative w-full h-full overflow-hidden rounded-[1.9rem] bg-white">
                      <Image
                        src="/kasir-screen.jpg"
                        alt="Tampilan Menu Kasir KasirGo"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 639px) 176px, 280px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
