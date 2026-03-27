import Image from "next/image";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { LinkButton } from "@/components/ui/link-button";
import { heroChips } from "@/lib/data";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id={SECTION_IDS.home} className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden className="ambient-orb left-[8%] top-[18%] h-36 w-36 bg-primary/20" />
      <div aria-hidden className="ambient-orb right-[10%] top-[12%] h-44 w-44 bg-secondary/20" />

      <div className="section-shell section-space">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <AnimatedInView>
              <div className="eyebrow">Trusted Local Destination</div>
            </AnimatedInView>

            <AnimatedInView delay={0.08}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text-secondary)]">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {SITE.shortLocation}
              </div>
            </AnimatedInView>

            <AnimatedInView delay={0.14}>
              <h1 className="display-title text-balance pt-8">
                Stay Comfortably.
                <span className="block text-gradient-gold">Dine Exceptionally.</span>
              </h1>
            </AnimatedInView>

            <AnimatedInView delay={0.2}>
              <p className="muted-copy max-w-2xl pt-6">
                Hotel Alakapuri is a trusted destination in Nedumkunnam, Kerala for warm
                hospitality, memorable dining, and a welcoming stay experience that feels both
                local and premium.
              </p>
            </AnimatedInView>

            <AnimatedInView delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--text-secondary)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </AnimatedInView>

            <AnimatedInView delay={0.32}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={`#${SECTION_IDS.dining}`} size="large" prefillMessage={SITE.diningPrefill}>
                  Explore Dining
                </LinkButton>
                <LinkButton
                  href={`#${SECTION_IDS.stay}`}
                  variant="secondary"
                  size="large"
                  prefillMessage={SITE.stayPrefill}
                >
                  Enquire About Stay
                </LinkButton>
              </div>
            </AnimatedInView>

            <AnimatedInView delay={0.38}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">Local trust</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Known for warm, dependable hospitality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">Refined experience</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Dining and stay are designed with care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">Nedumkunnam</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Rooted in Kerala hospitality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedInView>
          </div>

          <AnimatedInView delay={0.22} className="lg:pl-6">
            <div className="luxury-card mesh-panel p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="luxury-card overflow-hidden">
                    <Image
                      src="/images/hero/alakapuri-hero.svg"
                      alt="Premium visual concept for Hotel Alakapuri"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid gap-5">
                    <div className="luxury-card p-5">
                      <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.34em] text-primary">
                          Hotel & Restaurant
                        </p>
                        <h2 className="pt-3 text-2xl">Premium local hospitality</h2>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--text-secondary)]">
                          Thoughtful dining, welcoming comfort, and a polished guest-first identity.
                        </p>
                      </div>
                    </div>
                    <div className="luxury-card p-5">
                      <div className="relative z-10 space-y-3 text-sm text-[color:var(--text-secondary)]">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                          <span>Dining atmosphere</span>
                          <span className="text-primary">Warm</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                          <span>Stay comfort</span>
                          <span className="text-primary">Calm</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                          <span>Guest care</span>
                          <span className="text-primary">Trusted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="luxury-card p-5">
                    <div className="relative z-10">
                      <p className="text-sm uppercase tracking-[0.3em] text-primary">
                        Dining Focus
                      </p>
                      <p className="mt-3 text-lg leading-8 text-[color:var(--text-primary)]">
                        Family meals, friendly gatherings, and food served with consistent warmth.
                      </p>
                    </div>
                  </div>
                  <div className="luxury-card p-5">
                    <div className="relative z-10">
                      <p className="text-sm uppercase tracking-[0.3em] text-primary">
                        Stay Focus
                      </p>
                      <p className="mt-3 text-lg leading-8 text-[color:var(--text-primary)]">
                        A welcoming place to pause, settle in, and experience reliable hospitality.
                      </p>
                    </div>
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
