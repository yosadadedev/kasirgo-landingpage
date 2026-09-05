# KasirGo+ — App Reference

Sumber data untuk konten landing page. Diambil dari listing Play Store, terakhir dicek 2026-08-23.

**Sumber**: https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id

## Info dasar

| Field | Value |
|---|---|
| Nama aplikasi | KasirGo+ Aplikasi Kasir UMKM |
| Package ID | `com.yl.kasirgoplus` |
| Developer | Yosada Labs |
| Kategori | Bisnis |
| Harga | Freemium — lihat [Model Harga](#model-harga) |
| Rating | 4,7 ⭐ (62 ulasan) |
| Content rating | Rating 3+ |
| Versi terbaru | v1.4.0 |

## Tagline / short description

> KasirGo+ POS Kasir Offline/Online, Cetak Struk, Manajemen Stok & Laporan

## Deskripsi lengkap

KasirGo+ adalah aplikasi POS (kasir) untuk UMKM yang memudahkan jualan harian: input produk, kelola stok, transaksi cepat, dan laporan rapi. Bisa dipakai offline, lalu otomatis sinkron saat online.

KasirGo+ cocok untuk toko retail, warung, kedai kopi, laundry, dan berbagai usaha lainnya.

## Model Harga

> Dikonfirmasi langsung oleh tim (bukan dari Play Store), sumber kebenaran untuk [HargaSection.tsx](app/components/HargaSection.tsx).

**Paket Gratis** — untuk coba pakai:
- Maksimal 30 produk
- Maksimal 30 transaksi/hari
- 1 akun kasir

**Paket Pro** — batas di atas dihilangkan, plus:
- Produk, transaksi, dan kasir tanpa batas
- Custom struk
- Export laporan (Excel, PDF, dll)
- Prioritas akses fitur terbaru

Tidak ada biaya tersembunyi, bisa dibatalkan kapan saja. Harga Pro:

| Durasi | Harga |
|---|---|
| Bulanan | Rp24.900/bulan |
| 3 Bulan | Rp64.900/3 bulan |
| Tahunan | Rp249.900/tahun |

## Fitur utama

> Diselaraskan dengan daftar detail di [FiturSection.tsx](app/components/FiturSection.tsx), yang lebih lengkap dari deskripsi generik Play Store.

- **Kasir & POS Cepat**: transaksi dalam hitungan detik, atur diskon, pilih metode pembayaran
- **Open Bill**: simpan transaksi sebagai bon terbuka — nama pelanggan, nomor meja, catatan per item
- **Multi-User & Hak Akses**: mode owner + staf, login PIN 4–6 digit, izin per staf (kelola produk, lihat laporan, refund, dll)
- **Manajemen Produk**: foto, SKU, barcode, kategori, deskripsi, satuan, harga jual, dan HPP
- **Stok Otomatis**: stok masuk dari supplier & stok keluar (rusak/hilang/retur), HPP otomatis (weighted average)
- **Master Data Satuan**: CRUD satuan produk (pcs, kg, liter, dll)
- **Laporan Laba Rugi**: harian/mingguan/bulanan, export ke Excel/PDF
- **Multi Metode Bayar**: tunai, transfer bank, QRIS, e-wallet, campuran; cetak struk thermal 58mm/80mm
- **Riwayat & Refund**: pencarian transaksi lengkap, refund partial atau penuh
- **Backup & restore**: amankan data untuk kebutuhan operasional

## Keunggulan

- Ringan dan responsif, cocok untuk data transaksi besar
- Aman: sesi login terkontrol untuk menjaga keamanan akun
- Offline-first: tetap bisa transaksi tanpa internet, sinkron saat online

## Changelog terbaru (v1.4.0)

- **Pergerakan Stok**: menambahkan riwayat stok masuk dan keluar agar setiap perubahan stok produk lebih mudah dipantau dan diperiksa.
- **Cetak Struk Laporan**: menambahkan informasi metode pembayaran pada setiap transaksi di cetakan laporan, sehingga rekapan pembayaran (Tunai, Transfer, GoBiz, Shopee, Grab, dll) lebih jelas dan mudah diaudit.

## Kontak

- WhatsApp: https://wa.me/62859106610011 (dipakai di [Navbar.tsx](app/components/Navbar.tsx))
- Play Store: https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id
