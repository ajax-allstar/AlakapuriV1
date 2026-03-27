import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/ui/section-header";
import { diningFeatures } from "@/lib/data";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function DiningSection() {
  return (
    <section id={SECTION_IDS.dining} className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Dining Experience"
              title="Inviting food presentation with a premium local dining feel."
              description="The restaurant side of Hotel Alakapuri should feel welcoming, polished, and memorable. It is a space for families, groups, and local guests who value satisfying meals served with genuine care."
            />

            <div className="mt-8 grid gap-4">
              {diningFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <AnimatedInView key={item.title} delay={index * 0.06}>
                    <div className="luxury-card p-5">
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl">{item.title}</h3>
                          <p className="muted-copy mt-3 text-[0.96rem]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedInView>
                );
              })}
            </div>

            <AnimatedInView delay={0.22}>
              <div className="mt-8">
                <LinkButton
                  href={`#${SECTION_IDS.contact}`}
                  variant="primary"
                  size="large"
                  prefillMessage={SITE.diningPrefill}
                  focusTargetId="contact-name"
                >
                  Explore Dining
                </LinkButton>
              </div>
            </AnimatedInView>
          </div>

          <AnimatedInView delay={0.16}>
            <div className="luxury-card p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="luxury-card overflow-hidden">
                  <Image
                    src="/images/dining/signature-dining.svg"
                    alt="Dining atmosphere concept for Hotel Alakapuri"
                    width={1200}
                    height={860}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Atmosphere</p>
                    <p className="mt-4 text-lg leading-8">
                      Elegant local dining with warmth, familiar comfort, and welcoming service.
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Guest Feel</p>
                    <p className="mt-4 text-lg leading-8">
                      A memorable place for shared meals, family gatherings, and repeat visits.
                    </p>
                  </div>
                </div>
                <div className="rounded-[28px] border border-primary/20 bg-primary/10 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                    Restaurant Focus <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[color:var(--text-secondary)]">
                    This section presents Alakapuri as a restaurant people can trust for quality,
                    hospitality, and an atmosphere that feels relaxed yet premium.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
