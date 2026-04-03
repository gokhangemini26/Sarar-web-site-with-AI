import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CategoryBanners from "@/components/CategoryBanners";
import BestSellers from "@/components/BestSellers";
import DavetStili from "@/components/DavetStili";
import LifestyleSlider from "@/components/LifestyleSlider";
import VideoSection from "@/components/VideoSection";
import SarevBanner from "@/components/SarevBanner";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import FooterLinks from "@/components/FooterLinks";
import FooterBottom from "@/components/FooterBottom";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HeroSlider />
        <CategoryBanners />
        <BestSellers />
        <DavetStili />
        <LifestyleSlider />
        <VideoSection />
        <SarevBanner />
        <TrustBadges />
        <Newsletter />
      </main>
      <footer>
        <FooterLinks />
        <FooterBottom />
      </footer>
    </div>
  );
}
