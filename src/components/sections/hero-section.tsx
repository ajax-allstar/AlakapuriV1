import Image from "next/image";
import { BellRing, MapPin, Phone, UtensilsCrossed } from "lucide-react";
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
                Kerala favourites, warm service,
                <span className="block text-gradient-gold">and Alakapuri classics.</span>
              </h1>
            </AnimatedInView>

            <AnimatedInView delay={0.2}>
              <p className="muted-copy max-w-2xl pt-6">
                Alakapuri Restaurant is the brand shown in your real uploads: a local favourite in
                Nedumkunnam and Karukachal known for Kerala meals, porotta, family dining, and
                familiar everyday hospitality since 1983.
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
                <LinkButton href="/menu" size="large">
                  Explore Menu
                </LinkButton>
                <LinkButton href={SITE.phoneHref} variant="secondary" size="large">
                  Call Restaurant
                </LinkButton>
              </div>
            </AnimatedInView>

            <AnimatedInView delay={0.38}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <UtensilsCrossed className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">Since 1983</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        A long-running local restaurant identity, not a stay destination.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <BellRing className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">Open until 11 PM</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Delivery currently listed until 10:30 PM.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="luxury-card p-4">
                  <div className="relative z-10 flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold">{SITE.phoneDisplay}</p>
                      <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                        Call for menu details, orders, and timings.
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="luxury-card overflow-hidden">
                    <Image
                      src="/images/gallery/rainy-stall-counter.png"
                      alt="Alakapuri roadside snack counter on a rainy day"
                      width={768}
                      height={768}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="luxury-card p-5">
                    <div className="relative z-10 space-y-3 text-sm text-[color:var(--text-secondary)]">
                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                        <span>Menu site</span>
                        <span className="text-primary">Live</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                        <span>Service style</span>
                        <span className="text-primary">All You Can Eat</span>
                      </div>
                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
                        <span>Price per person</span>
                        <span className="text-primary">₹1–200</span>
                      </div>
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
