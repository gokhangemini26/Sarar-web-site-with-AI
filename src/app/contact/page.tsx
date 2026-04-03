import { CertBadges } from "@/components/CertBadges";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div className="merit-page">
      <main>
        <ContactSection />
      </main>
      <CertBadges />
    </div>
  );
}
