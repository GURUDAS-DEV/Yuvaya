import HeroSection from "@/Components/Landing/HeroSection";
import ScrollingSection from "@/Components/Landing/ScrollingSection";
import MiddleBanner from "@/Components/Landing/MiddleBanner";
import Navbar from "@/Components/Navbar";
import ShopFromUs from "@/Components/Landing/ShopFromUs";
import LowerBanner from "@/Components/Landing/LowerBanner";
import AboutUs from "@/Components/Landing/AboutUs";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full pb-10 pt-20 bg-white relative flex flex-col">
        <HeroSection />
        <ScrollingSection />
        <MiddleBanner />
        <ShopFromUs />
        <LowerBanner />
        <AboutUs />
      </main>
    </div>
  );
}
