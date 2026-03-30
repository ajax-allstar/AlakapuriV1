import { LinkButton } from "@/components/ui/link-button";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="pb-20">
      <div className="section-shell">
        <div className="luxury-card mesh-panel p-8 sm:p-10 lg:p-12">
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Final CTA</p>
              <h2 className="section-title pt-4 text-balance">Visit Alakapuri or call for today&apos;s menu</h2>
              <p className="muted-copy pt-5">
                The homepage now reflects the real restaurant direction: menu-led, visual, local,
                and easy to contact.
              </p>
            </div>

            <LinkButton href={SITE.phoneHref} size="large">
              Call Restaurant
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
