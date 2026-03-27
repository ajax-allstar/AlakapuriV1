import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DiningSection } from "@/components/sections/dining-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { PackageSection } from "@/components/sections/package-section";
import { StaySection } from "@/components/sections/stay-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { SplitFeatureSection } from "@/components/ui/split-feature-section";

export default function HomePage() {
  return (
    <div className="page-shell">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb left-[-8rem] top-[8rem] h-72 w-72 bg-primary/15" />
        <div className="ambient-orb right-[-6rem] top-[28rem] h-80 w-80 bg-secondary/15" />
        <div className="ambient-orb bottom-[-7rem] left-1/3 h-72 w-72 bg-highlight/10" />
        <div className="absolute inset-0 soft-grid opacity-[0.16]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SplitFeatureSection />
        <HighlightsSection />
        <OfferingsSection />
        <DiningSection />
        <StaySection />
        <PackageSection />
        <BenefitsSection />
        <WhyChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
