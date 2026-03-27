import { Mail, MapPin, Phone } from "lucide-react";
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
          eyebrow="Contact / Inquiry"
          title="A polished inquiry section for dining, stay, and premium package requests."
          description="The contact area brings together business details, quick actions, an embed-ready map placeholder, and a fully usable frontend form with validation, loading state, and success feedback."
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
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-5">
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a
                          href={SITE.emailHref}
                          className="mt-2 inline-block text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                        >
                          {SITE.emailDisplay}
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
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={SITE.phoneHref} variant="primary">
                    Call Now
                  </LinkButton>
                  <LinkButton
                    href="#contact"
                    variant="secondary"
                    focusTargetId="contact-name"
                    prefillMessage="Hello Hotel Alakapuri, I would like to send an inquiry."
                  >
                    Send Inquiry
                  </LinkButton>
                </div>

                <div className="rounded-[28px] border border-dashed border-white/15 bg-black/15 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Map Ready</p>
                  <p className="pt-4 text-lg leading-8">
                    An embed-ready location container for future map integration.
                  </p>
                  <div className="mt-6 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(200,155,60,0.2),transparent_38%),rgba(255,255,255,0.03)] p-10 text-center text-sm text-[color:var(--text-secondary)]">
                    Nedumkunnam, Kerala 686542, India
                  </div>
                </div>
              </div>
            </div>
          </AnimatedInView>

          <AnimatedInView delay={0.12}>
            <div className="luxury-card p-6 sm:p-7">
              <div className="relative z-10">
                <h3 className="text-3xl">Enquiry Form</h3>
                <p className="muted-copy mt-4 max-w-2xl">
                  Use this form to enquire about dining, stay, or the complete premium website
                  package. Validation, loading feedback, and success messaging are already wired in.
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
