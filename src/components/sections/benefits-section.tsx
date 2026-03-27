import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { benefitItems } from "@/lib/data";

export function BenefitsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Features & Benefits"
          title="Why this package feels powerful, practical, and future-ready."
          description="The benefits grid turns technical value into business value: better performance, stronger credibility, simpler recovery, safer foundations, and smoother long-term growth."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefitItems.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
