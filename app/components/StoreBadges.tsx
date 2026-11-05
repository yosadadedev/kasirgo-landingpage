import Image from "next/image";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yl.kasirgo&hl=id";
export const APP_STORE_URL = "https://apps.apple.com/id/app/kasirgo-aplikasi-kasir-umkm/id6817185397";
export const KASIRGO_PLUS_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id";
export const KASIRGO_PLUS_APP_STORE_URL = "https://apps.apple.com/id/app/kasirgo-aplikasi-kasir-umkm/id6829119858";

export const stores = [
  { href: PLAY_STORE_URL, icon: "/google-play-store-icon.svg", alt: "Google Play", name: "Play Store" },
  { href: APP_STORE_URL, icon: "/app-store-icon.svg", alt: "Apple", name: "App Store" },
];

const StoreBadges = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {stores.map((store) => (
        <a
          key={store.name}
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <Image src={store.icon} alt={store.alt} width={36} height={36} />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs text-gray-500">Download di</span>
            <span className="text-lg font-bold text-gray-800">{store.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default StoreBadges;
