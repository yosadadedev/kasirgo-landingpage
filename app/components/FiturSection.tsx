const FiturSection = () => {
  const features = [
    {
      icon: "⚡",
      iconBg: "bg-[#905694]/10",
      title: "Transaksi Cepat & Fleksibel",
      description:
        "Terima pembayaran tunai, QRIS, transfer, hingga kasbon dalam satu proses transaksi yang ringkas.",
    },
    {
      icon: "📦",
      iconBg: "bg-[#905694]/10",
      title: "Manajemen Produk & Kategori",
      description:
        "Atur harga, stok, barcode, dan variasi produk dengan rapi per kategori.",
    },
    {
      icon: "🏷️",
      iconBg: "bg-[#905694]/10",
      title: "Diskon & Promo",
      description:
        "Atur potongan harga untuk mendorong penjualan lebih tinggi.",
    },
    {
      icon: "🧑‍🤝‍🧑",
      iconBg: "bg-[#905694]/10",
      title: "Pelanggan & Member",
      description:
        "Simpan data pelanggan untuk layanan yang lebih personal dan program loyalitas.",
    },
    {
      icon: "📊",
      iconBg: "bg-indigo-100",
      title: "Laporan Penjualan",
      description:
        "Lihat ringkasan per periode, detail tiap transaksi, dan rekap metode pembayaran.",
    },
    {
      icon: "💸",
      iconBg: "bg-green-100",
      title: "Pencatatan Pengeluaran",
      description:
        "Catat biaya operasional agar perhitungan keuntungan usaha lebih akurat.",
    },
    {
      icon: "📝",
      iconBg: "bg-[#905694]/10",
      title: "Open Bill",
      description:
        "Simpan transaksi sebagai bon terbuka lengkap dengan nama pelanggan, nomor meja, dan catatan per item.",
    },
    {
      icon: "🖨️",
      iconBg: "bg-amber-100",
      title: "Printer & Struk",
      description:
        "Atur printer, custom tampilan struk, dan cetak ulang transaksi kapan saja.",
    },
    {
      icon: "🔒",
      iconBg: "bg-teal-100",
      title: "Data Lokal & Backup Cloud",
      description:
        "Semua data tersimpan aman di perangkatmu. Ada opsi sinkronisasi backup ke cloud, jadi data tetap bisa dipulihkan saat ganti HP.",
    },
  ];

  return (
    <section id="fitur" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#905694]/10 text-purple-700 rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Fitur Lengkap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Fitur Lengkap Aplikasi Kasir & POS Gratis
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Mulai dari transaksi cepat hingga laporan penjualan — semuanya dirancang untuk membantu usahamu jualan lebih rapi dan efisien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiturSection;
