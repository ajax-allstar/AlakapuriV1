import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Guest Impressions"
          title="Believable testimonial-style copy that matches a real hospitality business."
          description="The tone here stays grounded and credible. These impressions reinforce hospitality, local trust, and the dual identity of Alakapuri without sounding exaggerated."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.guest}
              quote={item.quote}
              guest={item.guest}
              context={item.context}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
