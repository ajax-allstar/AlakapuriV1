import { AnimatedInView } from "@/components/ui/animated-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { founders } from "@/lib/data";
import { SECTION_IDS } from "@/lib/constants";

export function FoundersSection() {
  return (
    <section id={SECTION_IDS.founders} className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Founder & Co-Founder"
          title="Example founder cards are included so real names and photos can be added next."
          description="You asked for founder and co-founder placeholders for now. These are intentionally marked as examples and can be replaced as soon as you share the real details."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((person, index) => (
            <AnimatedInView key={person.role} delay={index * 0.08}>
              <article className="luxury-card p-7 sm:p-8">
                <div className="relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-2xl font-semibold text-primary">
                      {person.role === "Founder" ? "F" : "C"}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-primary">{person.role}</p>
                      <h3 className="pt-2 text-3xl">{person.name}</h3>
                    </div>
                  </div>
                  <p className="muted-copy mt-6">{person.note}</p>
                </div>
              </article>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
