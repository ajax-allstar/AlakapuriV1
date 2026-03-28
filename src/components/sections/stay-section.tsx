import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/ui/section-header";
import { stayFeatures } from "@/lib/data";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function StaySection() {
  return (
    <section id={SECTION_IDS.stay} className="section-space">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="luxury-card p-5 sm:p-6">
              <div className="relative z-10 grid gap-5">
                <div className="luxury-card overflow-hidden">
                  <Image
                    src="/images/stay/welcome-stay.svg"
                    alt="Stay experience concept for Hotel Alakapuri"
                    width={1200}
                    height={860}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {stayFeatures.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[24px] border border-white/10 bg-black/15 p-5"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <p className="mt-4 text-lg">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Stay Experience"
              title="Comfort, calm, and hospitality-first service for a welcoming stay."
              description="The hotel side of Alakapuri is shaped around guest comfort, convenience, and confidence. It should feel trustworthy for travellers and families looking for a calm environment supported by warm, reliable service."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {stayFeatures.map((item) => (
                <span
                  key={item.title}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {item.title}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-5">
              <p className="muted-copy">
                Whether guests are passing through or planning a longer visit, the stay experience
                communicates ease, warmth, and a sense of dependable care. The visual direction is
                quiet, refined, and reassuring.
              </p>
              <p className="muted-copy">
                This helps the website present Alakapuri as more than a local stop. It becomes a
                hospitality brand people can trust with both meals and accommodation.
              </p>
            </div>

            <div className="mt-8">
              <LinkButton
                href={`#${SECTION_IDS.contact}`}
                variant="primary"
                size="large"
                prefillMessage={SITE.stayPrefill}
                focusTargetId="contact-name"
              >
                Enquire About Stay
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
