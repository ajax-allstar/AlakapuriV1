import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/ui/section-header";
import { experienceCards } from "@/lib/data";

export function SplitFeatureSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Dual Experience"
          title="Restaurant warmth and welcoming stay comfort in one destination."
          description="Hotel Alakapuri is designed to communicate both sides of the business clearly: a refined restaurant experience for memorable dining and a dependable hotel experience shaped by hospitality, convenience, and calm."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experienceCards.map(({ icon: Icon, title, description, ctaLabel, href }) => (
            <article key={title} className="luxury-card group p-7 sm:p-8">
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-3xl">{title}</h3>
                <p className="muted-copy mt-5 max-w-xl">{description}</p>
                <div className="mt-8">
                  <LinkButton
                    href={href}
                    variant="secondary"
                    prefillMessage={
                      href === "#dining"
                        ? "Hello Hotel Alakapuri, I would like to enquire about dining at your restaurant."
                        : "Hello Hotel Alakapuri, I would like to enquire about staying at your hotel."
                    }
                  >
                    {ctaLabel}
                  </LinkButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
