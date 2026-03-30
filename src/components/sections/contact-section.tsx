import { Clock3, Globe, MapPin, Phone } from "lucide-react";
import { AnimatedInView } from "@/components/ui/animated-in-view";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { SECTION_IDS, SITE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="section-space">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact & Visit"
          title="Location, number, menu website, and timing details are now part of the live page."
          description="This section keeps the restaurant details directly on the page and includes a working form for future enquiries."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <AnimatedInView>
            <div className="luxury-card h-full p-6 sm:p-7">
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">{SITE.subtitle}</p>
                  <h3 className="pt-3 text-3xl">{SITE.name}</h3>
                  <p className="muted-copy pt-4">{SITE.location}</p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a
                          href={SITE.phoneHref}
                          className="mt-2 inline-block text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                        >
                          {SITE.phoneDisplay}
                        </a>
                        <p className="mt-2 text-[color:var(--text-secondary)]">
                          Alternate:{" "}
                          <a
                            href={SITE.secondaryPhoneHref}
                            className="hover:text-[color:var(--text-primary)]"
                          >
                            {SITE.secondaryPhoneDisplay}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                    <div className="flex items-start gap-4">
                      <Globe className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">Menu Website</p>
                        <a
                          href={SITE.menuUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                        >
                          {SITE.menuDisplay}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="mt-2 text-[color:var(--text-secondary)]">{SITE.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                    <div className="flex items-start gap-4">
                      <Clock3 className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">Hours & Service</p>
                        <p className="mt-2 text-[color:var(--text-secondary)]">{SITE.hoursDisplay}</p>
                        <p className="mt-1 text-[color:var(--text-secondary)]">{SITE.deliveryDisplay}</p>
                        <p className="mt-1 text-[color:var(--text-secondary)]">{SITE.serviceOptions}</p>
                        <p className="mt-1 text-[color:var(--text-secondary)]">{SITE.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={SITE.phoneHref} variant="primary">
                    Call Now
                  </LinkButton>
                  <LinkButton
                    href="#contact"
                    variant="secondary"
                    focusTargetId="contact-name"
                    prefillMessage={SITE.contactPrefill}
                  >
                    Send Inquiry
                  </LinkButton>
                </div>
              </div>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.12}>
            <div className="luxury-card p-6 sm:p-7">
              <div className="relative z-10">
                <h3 className="text-3xl">Enquiry Form</h3>
                <p className="muted-copy mt-4 max-w-2xl">
                  Use this form to ask about menu items, order timing, contact details, or future
                  founder/gallery updates. Validation and success messaging are already wired in.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
