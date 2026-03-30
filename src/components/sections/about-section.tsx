import Image from "next/image";
import { Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { SectionHeader } from "@/components/ui/section-header";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Brand Identity"
              title="The website now reflects the real Alakapuri Restaurant brand."
              description="Your uploaded logo, dish posters, and menu boards clearly show Alakapuri as a restaurant business. This section keeps the focus on local food, family dining, and familiar Kerala favourites."
            />

            <AnimatedInView delay={0.1}>
              <div className="mt-8 space-y-5">
                <p className="muted-copy">
                  Based on your latest instructions and the real uploads, Alakapuri is being
                  presented as a restaurant with menu variety, strong local recall, and practical
                  details like phone, business-site menu, hours, and service options.
                </p>
                <p className="muted-copy">
                  The visual system stays dark, warm, and gold-led, but the messaging now centres on
                  food, signature dishes, and the everyday restaurant identity that people already know.
                </p>
              </div>
            </AnimatedInView>
          </div>

          <AnimatedInView delay={0.16}>
            <div className="luxury-card p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="luxury-card overflow-hidden">
                  <Image
                    src="/images/gallery/rainy-stall-counter.png"
                    alt="Alakapuri roadside snack counter on a rainy day"
                    width={621}
                    height={374}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <UtensilsCrossed className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">Restaurant identity</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      Built around dishes, menu boards, and familiar local food imagery.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">{SITE.hoursDisplay}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      Service details now match the real business listing.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">{SITE.phoneDisplay}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      Primary contact number shown in the uploaded materials.
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
