import { CertBadges } from "@/components/CertBadges";
import { ClientsSection } from "@/components/ClientsSection";

export default function ClientsPage() {
  return (
    <div className="merit-page">
      <main>
        <ClientsSection />
      </main>
      <CertBadges />
    </div>
  );
}
