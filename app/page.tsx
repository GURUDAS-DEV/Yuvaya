import HeroSection from "@/Components/Landing/HeroSection";
import ScrollingSection from "@/Components/Landing/ScrollingSection";
import MiddleBanner from "@/Components/Landing/MiddleBanner";
import Navbar from "@/Components/Navbar";
import ShopFromUs from "@/Components/Landing/ShopFromUs";
import LowerBanner from "@/Components/Landing/LowerBanner";
import AboutUs from "@/Components/Landing/AboutUs";
import FAQs from "@/Components/Landing/FAQs";
import NewsLetter from "@/Components/Landing/NewsLetter";
import VerticalInstaPost from "@/Components/Landing/VerticalInstaPost";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full  pt-20 bg-white relative flex flex-col">
        <HeroSection />
        <ScrollingSection />
        <MiddleBanner />
        <ShopFromUs />
        <LowerBanner />
        <AboutUs />
        <FAQs />
        <VerticalInstaPost />
        <NewsLetter />
        <Footer />
      </main>
    </div>
  );
}
