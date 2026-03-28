import { LinkButton } from "@/components/ui/link-button";
import { PackageCard } from "@/components/ui/package-card";
import { SectionHeader } from "@/components/ui/section-header";
import { packageConditionNote, packageItems } from "@/lib/data";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function PackageSection() {
  return (
    <section id={SECTION_IDS.features} className="section-space">
      <div className="section-shell">
        <div className="grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <SectionHeader
              eyebrow="Complete Premium Website Package"
              title="A high-value package presented with clarity, premium styling, and working action."
              description="This section showcases everything included in the digital offering and keeps the messaging useful. The highlighted items reinforce advanced capability, performance, security, and long-term support."
            />

            <div className="luxury-card mt-8 p-6">
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.32em] text-primary">
                  Package Condition
                </p>
                <p className="pt-4 text-2xl leading-9 text-[color:var(--text-primary)]">
                  {packageConditionNote}
                </p>
                <p className="muted-copy pt-4 text-[0.98rem]">
                  Designed to feel complete, premium, and long-term rather than fragmented across
                  multiple partial services.
                </p>
                <div className="mt-7">
                  <LinkButton
                    href={`#${SECTION_IDS.contact}`}
                    variant="primary"
                    size="large"
                    prefillMessage={SITE.packagePrefill}
                    focusTargetId="contact-name"
                  >
                    Get This Package
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {packageItems.map((item, index) => (
              <PackageCard
                key={item.label}
                icon={item.icon}
                label={item.label}
                description={item.description}
                highlight={item.highlight}
                index={index}
              />
            ))}

            <article className="luxury-card border-primary/30 bg-primary/10 p-6 md:col-span-2 xl:col-span-3">
              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Included Note</p>
                  <p className="pt-3 text-2xl leading-8">{packageConditionNote}</p>
                </div>
                <LinkButton
                  href={`#${SECTION_IDS.contact}`}
                  variant="secondary"
                  prefillMessage={SITE.packagePrefill}
                  focusTargetId="contact-name"
                >
                  Enquire About the Package
                </LinkButton>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
