import { CertBadges } from "@/components/CertBadges";
import { ProcessSection } from "@/components/ProcessSection";

export default function ProcessPage() {
  return (
    <div className="merit-page">
      <main>
        <ProcessSection />
      </main>
      <CertBadges />
    </div>
  );
}
