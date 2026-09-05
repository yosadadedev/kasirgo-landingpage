const KenapaSection = () => {
  const features = [
    {
      icon: "🎁",
      iconBg: "bg-[#905694]/10",
      title: "Gratis dengan Limit, Upgrade Kapan Perlu",
      description:
        "Mulai gratis dengan akses hampir semua fitur, tinggal install dan langsung transaksi. Butuh lebih longgar? Upgrade ke Pro yang terjangkau.",
    },
    {
      icon: "🛡️",
      iconBg: "bg-teal-100",
      title: "POS Offline-First & Aman",
      description:
        "Tetap bisa transaksi tanpa internet, data otomatis sinkron begitu online lagi. Privasi terjaga, kasir jalan terus kapan saja.",
    },
    {
      icon: "🏪",
      iconBg: "bg-green-100",
      title: "Cocok untuk Semua Jenis Usaha",
      description:
        "Dari warung, FnB, coffee shop, sampai barbershop — KasirGo+ fleksibel mengikuti cara kamu jualan.",
    },
    {
      icon: "👥",
      iconBg: "bg-amber-100",
      title: "Multi-User & Kontrol Akses",
      description:
        "Atur kasir dan admin dengan izin akses berbeda (RBAC), cocok untuk usaha dengan lebih dari satu pegawai.",
    },
  ];

  return (
    <section id="kenapa" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Kenapa <span className="text-purple-600">KasirGo+</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Dibuat dengan hati untuk membantu UMKM Indonesia naik kelas, dengan harga yang bersahabat di kantong.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
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

export default KenapaSection;
