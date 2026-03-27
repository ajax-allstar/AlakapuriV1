import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { offerings } from "@/lib/data";

export function OfferingsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="What We Offer"
          title="Every section supports the core promise of dining, hospitality, and stay."
          description="The offering mix is intentionally practical and premium: useful service pillars, polished presentation, and clear messaging that tells guests exactly why Alakapuri feels dependable."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <ServiceCard
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
