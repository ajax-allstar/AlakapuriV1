import { AnimatedInView } from "@/components/ui/animated-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { highlightStats } from "@/lib/data";

export function HighlightsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Business Snapshot"
          title="Practical restaurant information is now built directly into the website."
          description="This section keeps the important details on the page itself: service options, hours, delivery timing, and price range."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {highlightStats.map((item, index) => (
            <AnimatedInView key={item.title} delay={index * 0.06}>
              <article className="luxury-card h-full p-6">
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.28em] text-primary">{item.value}</p>
                  <h3 className="pt-4 text-2xl leading-8">{item.title}</h3>
                  <p className="muted-copy mt-4 text-[0.96rem]">{item.description}</p>
                </div>
              </article>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
