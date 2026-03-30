import { SiteFrame } from "@/components/layout/site-frame";
import { DiningSection } from "@/components/sections/dining-section";
import { OfferingsSection } from "@/components/sections/offerings-section";

export default function MenuPage() {
  return (
    <SiteFrame>
      <OfferingsSection />
      <DiningSection />
    </SiteFrame>
  );
}
