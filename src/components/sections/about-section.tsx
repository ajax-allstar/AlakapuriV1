import Image from "next/image";
import { BedDouble, MapPin, UtensilsCrossed } from "lucide-react";
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
              title="A trusted Alakapuri experience shaped by food, comfort, and local warmth."
              description="Hotel Alakapuri brings together a destination for satisfying dining and a place for welcoming hospitality and stay. The brand is rooted in local trust, approachable service, memorable atmosphere, and a guest experience that feels refined without losing its warmth."
            />

            <AnimatedInView delay={0.1}>
              <div className="mt-8 space-y-5">
                <p className="muted-copy">
                  Positioned in Nedumkunnam, Hotel Alakapuri is designed to feel credible,
                  comforting, and polished. The restaurant side focuses on quality meals, relaxed
                  group dining, and a familiar local appeal. The hotel side highlights convenience,
                  calm, and thoughtful care for guests who want a dependable stay.
                </p>
                <p className="muted-copy">
                  Together, these two identities create a complete hospitality destination that
                  feels memorable, family-friendly, and distinctly local.
                </p>
              </div>
            </AnimatedInView>
          </div>

          <AnimatedInView delay={0.16}>
            <div className="luxury-card p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="luxury-card overflow-hidden">
                  <Image
                    src="/images/brand/alakapuri-seal.svg"
                    alt="Hotel Alakapuri brand seal concept"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <UtensilsCrossed className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">Food quality</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      Dining shaped by warmth, consistency, and local comfort.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <BedDouble className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">Welcoming stay</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      Comfort-led hospitality for travellers and family guests.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold">{SITE.shortLocation}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      A location identity rooted in Kerala trust and familiarity.
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
