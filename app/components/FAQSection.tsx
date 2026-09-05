"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah benar-benar gratis?",
      answer:
        "Bisa dipakai gratis dengan akses hampir semua fitur POS — tinggal install dan langsung transaksi tanpa bayar. Kalau butuh lebih longgar, tersedia opsi upgrade ke Pro seharga Rp24.900/bulan.",
    },
    {
      question: "Apakah butuh internet?",
      answer:
        "Tidak wajib! KasirGo+ dirancang dengan sistem offline-first. Semua transaksi, data produk, dan laporan tersimpan 100% di perangkat Anda. Internet hanya diperlukan jika Anda ingin backup ke cloud atau update aplikasi.",
    },
    {
      question: "Bisa dipakai banyak kasir/staf?",
      answer:
        "Bisa! Fitur multi-user memungkinkan Anda membuat akun staf dengan PIN 4-6 digit. Anda bisa atur hak akses per staf: misalnya staf kasir hanya bisa proses transaksi, tidak bisa lihat laporan keuangan.",
    },
    {
      question: "Bisa simpan transaksi yang belum dibayar (open bill)?",
      answer:
        "Tentu saja. Fitur Open Bill memungkinkan Anda menyimpan transaksi sementara untuk pelanggan yang makan di tempat atau pesan dulu bayar nanti. Bisa tambahkan nomor meja, nama pelanggan, dan catatan khusus.",
    },
    {
      question: "Bagaimana kalau HP rusak/hilang?",
      answer:
        "Jangan panik! Selalu lakukan backup data secara berkala (bisa simpan ke Google Drive, email, atau HP lain). Jika HP rusak/hilang, tinggal install KasirGo+ di HP baru dan restore file backup yang Anda simpan.",
    },
    {
      question: "Apakah data saya aman?",
      answer:
        "Aman. KasirGo+ offline-first — data transaksi tersimpan di perangkat Anda dan otomatis tersinkron ke server saat online, jadi tetap terjaga meski ganti HP. Privasi dan keamanan data usaha Anda adalah prioritas utama kami.",
    },
    {
      question: "Bisa dipakai di tablet atau laptop?",
      answer:
        "Bisa! Aplikasi KasirGo+ dirancang responsive untuk layar HP (5 inch) hingga tablet (10 inch). Untuk laptop/PC, Anda bisa pakai emulator Android.",
    },
    {
      question: "Bagaimana cara cetak struk?",
      answer:
        "KasirGo+ mendukung printer thermal Bluetooth ukuran 58mm dan 80mm dari berbagai merk (Epson, Xprinter, dll). Cukup pairing Bluetooth printer dengan HP Anda, lalu cetak struk otomatis setelah transaksi.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#905694]/10 text-purple-700 rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Pertanyaan Umum
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Tanya Jawab Seputar Aplikasi Kasir & POS KasirGo+
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg shadow-gray-100">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 last:border-b-0 ${openIndex === index ? "bg-[#905694]/5" : ""}`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6 group"
              >
                <span className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-purple-600" : "group-hover:text-purple-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Masih ada pertanyaan? Hubungi tim kami ya!
          </p>
          <a
            href="https://wa.me/62859106610011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full transition-all font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
