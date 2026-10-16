"use client";

import { useState } from "react";

const HargaSection = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const pricingPlans = [
    { label: "Bulanan", price: "Rp13.900", period: "/bulan" },
  ];

  const cloudFeatures = [
    {
      icon: "📦",
      iconBg: "bg-[#905694]/10",
      title: "Produk Tanpa Batas",
      description:
        "Tambah produk sebanyak apapun tanpa batasan jumlah, cocok untuk usaha yang terus berkembang.",
    },
    {
      icon: "⚡",
      iconBg: "bg-[#905694]/10",
      title: "Transaksi Unlimited",
      description:
        "Proses transaksi sebanyak apapun setiap hari tanpa batas harian.",
    },
    {
      icon: "🧾",
      iconBg: "bg-[#905694]/10",
      title: "Custom Struk",
      description:
        "Sesuaikan tampilan struk dengan logo dan informasi toko Anda sendiri.",
    },
    {
      icon: "📊",
      iconBg: "bg-[#905694]/10",
      title: "Export Laporan",
      description:
        "Unduh laporan penjualan dalam format Excel, PDF, dan lainnya untuk analisa usaha.",
    },
    {
      icon: "🚀",
      iconBg: "bg-[#905694]/10",
      title: "Prioritas Fitur Terbaru",
      description:
        "Dapatkan akses lebih awal ke fitur-fitur baru yang kami kembangkan.",
    },
  ];

  const comparisonData = [
    { feature: "Jumlah Produk", gratis: "Maksimal 30 Produk", pro: "Tanpa Batas", proHighlight: true },
    { feature: "Transaksi Harian", gratis: "Maksimal 30 Transaksi/Hari", pro: "Tanpa Batas", proHighlight: true },
    { feature: "Custom Struk", gratis: "cross", pro: "check", proHighlight: false },
    { feature: "Export Laporan (Excel, PDF, dll)", gratis: "cross", pro: "check", proHighlight: false },
    { feature: "Prioritas Fitur Terbaru", gratis: "cross", pro: "check", proHighlight: false },
  ];

  const faqList = [
    {
      question: "Apa perbedaan utama antara paket Gratis dan Pro?",
      answer:
        "Paket Gratis cocok untuk coba pakai, dengan batas 30 produk dan 30 transaksi per hari. Paket Pro menghilangkan semua batas itu (produk dan transaksi tanpa batas), plus custom struk, export laporan (Excel, PDF, dll), dan prioritas akses ke fitur terbaru.",
    },
    {
      question: "Apakah ada biaya tersembunyi di paket Pro?",
      answer:
        "Tidak ada. Harga yang tertera (Rp13.900/bulan) adalah harga akhir yang Anda bayar, tanpa biaya tambahan lainnya.",
    },
    {
      question: "Apakah saya bisa membatalkan langganan Pro kapan saja?",
      answer:
        "Bisa! Anda bisa membatalkan langganan kapan saja tanpa denda. Paket Pro tetap aktif sampai akhir periode yang sudah dibayar, setelah itu akun kembali ke paket Gratis dengan batasannya (data Anda tidak hilang).",
    },
    {
      question: "Kalau sudah lewat batas 30 produk atau 30 transaksi/hari di paket Gratis, apa yang terjadi?",
      answer:
        "Anda perlu upgrade ke Pro untuk menambah produk baru atau memproses transaksi lebih dari batas harian tersebut. Data dan transaksi yang sudah ada sebelumnya tetap aman.",
    },
  ];

  return (
    <section id="harga" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#905694]/5 border border-[#905694]/10 rounded-full text-sm font-semibold text-purple-700 mb-6">
            <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            KOMITMEN 100% UNTUK UMKM
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Pilih Paket Harga Sesuai{" "}
            <span className="text-purple-600">Skala Bisnis Anda</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Mulai gratis dengan akses hampir semua fitur POS & kelola stok, cocok untuk kebutuhan harian usahamu.
            Butuh lebih longgar? Tinggal upgrade ke Pro kapan saja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start">
          <div className="min-w-0 bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/60">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✨</span>
              <h3 className="text-2xl font-extrabold text-gray-900">Paket Pro</h3>
            </div>
            <p className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
              Paket Gratis: 30 produk, 30 transaksi/hari — cocok untuk coba pakai
            </p>

            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Harga Langganan Pro:
            </p>

            <div className="space-y-4">
              {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between bg-gray-50 hover:bg-[#905694]/5 border border-gray-200 hover:border-[#905694]/15 rounded-2xl p-5 transition-all duration-200"
              >
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-1">
                  {plan.label}
                </p>
                <p className="text-gray-600 font-medium">
                  <span className="font-semibold text-gray-900">{plan.price}</span>
                  <span>{plan.period}</span>
                </p>
                </div>
              </div>
            ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-5">
              Tidak ada biaya tersembunyi. Bisa dibatalkan kapan saja.
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              Mau paket selain bulanan (3 bulan, tahunan, dll)?{" "}
              <a
                href="https://wa.me/62859106610011"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                Chat admin via WhatsApp
              </a>
            </p>
          </div>

          <div className="min-w-0 pt-4 lg:pl-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
              Keunggulan Paket Pro:
            </h3>
            <div className="space-y-7">
              {cloudFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`flex-shrink-0 w-11 h-11 ${feat.iconBg} rounded-xl flex items-center justify-center text-xl`}>
                    {feat.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Perbandingan Detail Fitur
          </h3>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 bg-gray-50/80 border-b border-gray-200">
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg">Fitur Utama</div>
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg text-center">
                Gratis
              </div>
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg text-center">
                Pro
              </div>
            </div>
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 ${
                  idx % 2 === 1 ? "bg-white" : "bg-gray-50/40"
                }`}
              >
                <div className="p-5 sm:p-6 font-semibold text-gray-800 text-sm sm:text-base">
                  {row.feature}
                </div>
                <div className="p-5 sm:p-6 text-sm sm:text-base text-center flex items-center justify-center">
                  {row.gratis === "check" ? (
                    <span className="inline-flex items-center gap-1.5 text-purple-600 font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Ya
                    </span>
                  ) : row.gratis === "cross" ? (
                    <span className="inline-flex items-center gap-1.5 text-gray-400 font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Tidak
                    </span>
                  ) : (
                    <span className="text-gray-500">{row.gratis}</span>
                  )}
                </div>
                <div className="p-5 sm:p-6 text-sm sm:text-base text-center flex items-center justify-center">
                  {row.pro === "check" ? (
                    <span className="inline-flex items-center gap-1.5 text-purple-600 font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Ya
                    </span>
                  ) : (
                    <span className={row.proHighlight ? "text-purple-600 font-bold" : "text-gray-500"}>
                      {row.pro}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Pertanyaan Umum seputar Harga
          </h3>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-gray-200 overflow-hidden ${
                  faqOpen === idx ? "shadow-lg shadow-gray-200/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-7 py-5 sm:py-6 group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#905694]/5 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
                      ?
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180 text-purple-600" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faqOpen === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-6 sm:pb-8 pl-16 sm:pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HargaSection;
