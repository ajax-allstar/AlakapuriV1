import { SiteFrame } from "@/components/layout/site-frame";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";

export default function HomePage() {
  return (
    <SiteFrame>
      <HeroSection />
      <HighlightsSection />
      <CtaSection />
    </SiteFrame>
  );
}
