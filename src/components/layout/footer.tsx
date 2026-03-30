import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.2em]">{SITE.shortName}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[color:var(--text-secondary)]">
              {SITE.subtitle}
            </p>
            <p className="muted-copy mt-5 max-w-xl text-[0.98rem]">
              Alakapuri Restaurant is a long-running restaurant in Nedumkunnam serving Kerala
              favourites, familiar everyday meals, and warm local hospitality.
            </p>
          </div>

          <div>
            <h2 className="text-lg">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg">Contact</h2>
            <ul className="mt-5 space-y-3 text-[color:var(--text-secondary)]">
              <li>{SITE.location}</li>
              <li>
                <a href={SITE.phoneHref} className="hover:text-[color:var(--text-primary)]">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.menuUrl} className="hover:text-[color:var(--text-primary)]">
                  {SITE.menuDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <LinkButton href={SITE.phoneHref} variant="outline">
                Call Restaurant
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[color:var(--text-secondary)]">
          © 2026 Alakapuri Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
