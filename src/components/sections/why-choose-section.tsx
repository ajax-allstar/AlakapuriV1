import { CheckCircle2 } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { whyChooseItems } from "@/lib/data";
import { SITE } from "@/lib/constants";

export function WhyChooseSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Why Choose Alakapuri"
              title="One hospitality brand with clear reasons to trust it."
              description="This section helps visitors quickly understand why Alakapuri stands out: it combines restaurant and hotel convenience with local recognition, warm service, and a memorable guest atmosphere."
            />

            <div className="mt-8 space-y-4">
              {whyChooseItems.map((item, index) => (
                <AnimatedInView key={item.title} delay={index * 0.05}>
                  <div className="luxury-card p-5">
                    <div className="relative z-10 flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <h3 className="text-xl">{item.title}</h3>
                        <p className="muted-copy mt-3 text-[0.96rem]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedInView>
              ))}
            </div>
          </div>

          <AnimatedInView delay={0.18}>
            <div className="luxury-card mesh-panel p-8 sm:p-10">
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.34em] text-primary">
                  Alakapuri Promise
                </p>
                <h3 className="pt-5 text-4xl leading-tight text-balance">
                  A memorable environment for both dining and stay.
                </h3>
                <p className="muted-copy pt-6">
                  {SITE.name} is positioned as a place where guests can arrive with confidence,
                  enjoy warm restaurant hospitality, and experience a calm, welcoming stay. That
                  combination makes the brand feel complete instead of partial.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">For Dining</p>
                    <p className="mt-4 text-lg leading-8">
                      Warm atmosphere, local familiarity, and memorable shared meals.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">For Stay</p>
                    <p className="mt-4 text-lg leading-8">
                      Welcoming comfort, calm presentation, and dependable guest care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
