import { CertBadges } from "@/components/CertBadges";
import { ProductsSection } from "@/components/ProductsSection";

export default function ProductsPage() {
  return (
    <div className="merit-page">
      <main>
        <ProductsSection />
      </main>
      <CertBadges />
    </div>
  );
}
