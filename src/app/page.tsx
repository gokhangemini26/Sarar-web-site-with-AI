import HeroSlider from "@/components/HeroSlider";
import CategoryBanners from "@/components/CategoryBanners";
import BestSellers from "@/components/BestSellers";
import DavetStili from "@/components/DavetStili";
import LifestyleSlider from "@/components/LifestyleSlider";
import VideoSection from "@/components/VideoSection";
import SarevBanner from "@/components/SarevBanner";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
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
  );
}
