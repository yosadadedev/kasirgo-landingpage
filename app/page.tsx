import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import KenapaSection from "./components/KenapaSection";
import FiturSection from "./components/FiturSection";
import CaraPakaiSection from "./components/CaraPakaiSection";
import FAQSection from "./components/FAQSection";
import HargaSection from "./components/HargaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <KenapaSection />
        <FiturSection />
        <CaraPakaiSection />
        <FAQSection />
        <HargaSection />
      </main>
      <Footer />
    </div>
  );
}
