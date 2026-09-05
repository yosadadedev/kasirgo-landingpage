import Image from "next/image";

const CaraPakaiSection = () => {
  const steps = [
    {
      number: "1",
      icon: "📲",
      title: "Download di Play Store",
      description:
        "Unduh aplikasi KasirGo+ dari Google Play Store di handphone Android Anda. Gratis tanpa iklan mengganggu.",
    },
    {
      number: "2",
      icon: "🛠️",
      title: "Setup Toko",
      description:
        "Isi nama toko, alamat, dan pilih warna tema. Bisa langsung muat data contoh untuk coba-coba tanpa input manual.",
    },
    {
      number: "3",
      icon: "🛍️",
      title: "Mulai Jualan!",
      description:
        "Tambah produk, proses transaksi, dan pantau laporan. Langsung bisa dipakai dari HP, gratis dengan akses hampir semua fitur.",
    },
  ];

  return (
    <section id="cara-pakai" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#905694]/10 text-purple-700 rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Cara Pakai
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Mulai dalam 3 langkah mudah
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Tidak perlu pelatihan, tidak perlu IT. Siapapun bisa pakai dalam 5 menit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -top-14 left-6 text-[120px] font-black text-gray-200 leading-none select-none pointer-events-none group-hover:text-[#905694]/20 transition-colors">
                {step.number}
              </div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#905694]/15 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id"
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
    </section>
  );
};

export default CaraPakaiSection;
