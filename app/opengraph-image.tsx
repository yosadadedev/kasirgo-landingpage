import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "KasirGo - Aplikasi Kasir & POS untuk UMKM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const screenshot = await readFile(join(process.cwd(), "public/kasir-screen.jpg"));
  const screenshotSrc = `data:image/jpeg;base64,${screenshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #f3e8f4 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: "#905694", marginBottom: 24 }}>
            KasirGo
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>
            Aplikasi Kasir untuk UMKM, Mudah & Praktis
          </div>
          <div style={{ fontSize: 30, color: "#4b5563", marginTop: 28, lineHeight: 1.35 }}>
            POS offline-first: transaksi, stok, dan laporan. Mulai gratis.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 10,
            background: "#111827",
            borderRadius: 40,
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
        >
          <img src={screenshotSrc} width={238} height={529} style={{ borderRadius: 32 }} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
