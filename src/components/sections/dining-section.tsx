import Image from "next/image";
import { Clock3, ExternalLink } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/ui/section-header";
import { diningFeatures, menuBoards } from "@/lib/data";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function DiningSection() {
  return (
    <section id={SECTION_IDS.menu} className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Menu & Specials"
              title="Real menu boards and featured dishes are now part of the website."
              description="This section combines the uploaded menu cards with the strongest food posters so visitors can quickly understand what Alakapuri is known for before they call or visit."
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={SITE.menuUrl} variant="primary" size="large" target="_blank" rel="noreferrer">
                  View Menu Website
                </LinkButton>
                <LinkButton href={SITE.phoneHref} variant="secondary" size="large">
                  Call for Orders
                </LinkButton>
              </div>
            </AnimatedInView>
          </div>

          <AnimatedInView delay={0.16}>
            <div className="luxury-card p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {menuBoards.map((item) => (
                    <div key={item.label} className="luxury-card overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={576}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Menu Website</p>
                    <p className="mt-4 text-lg leading-8">
                      {SITE.menuDisplay}
                    </p>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-black/15 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Hours</p>
                    <p className="mt-4 text-lg leading-8">
                      {SITE.hoursDisplay}
                    </p>
                  </div>
                </div>
                <div className="rounded-[28px] border border-primary/20 bg-primary/10 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                    Updated Restaurant Details <Clock3 className="h-4 w-4" aria-hidden="true" />
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-[color:var(--text-secondary)]">
                    The website now shows the actual restaurant menu direction instead of hotel/stay
                    messaging, and includes the business-site link for deeper browsing.
                  </p>
                  <div className="mt-5">
                    <a
                      href={SITE.menuUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Open business-site menu <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
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
