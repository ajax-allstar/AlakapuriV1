import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { offerings } from "@/lib/data";

export function OfferingsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Menu Categories"
          title="A clearer restaurant menu structure based on the uploaded boards."
          description="The site now highlights the types of food people are likely looking for first: breakfast, meals, porotta, rice dishes, veg choices, and delivery-friendly ordering."
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
