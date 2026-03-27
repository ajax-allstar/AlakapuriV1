"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_ITEMS, SECTION_IDS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const { activeId, isScrolled } = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(15, 15, 16, 0.82)" : "rgba(15, 15, 16, 0.35)",
        borderColor: isScrolled ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)"
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <a
            href={`#${SECTION_IDS.home}`}
            className="group inline-flex items-center gap-4 rounded-full px-2 py-1"
            onClick={closeMenu}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold tracking-[0.22em] text-primary">
              A
            </div>
            <div>
              <p className="font-display text-lg tracking-[0.28em] text-[color:var(--text-primary)] transition-colors group-hover:text-primary sm:text-xl">
                {SITE.shortName}
              </p>
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-secondary)]">
                {SITE.subtitle}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]",
                  activeId === item.id && "bg-white/6 text-[color:var(--text-primary)]"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LinkButton
              href={`#${SECTION_IDS.contact}`}
              variant="primary"
              prefillMessage={SITE.stayPrefill}
            >
              Enquire Now
            </LinkButton>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--text-primary)] lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[rgba(10,10,11,0.96)] lg:hidden"
          >
            <div className="section-shell py-6">
              <nav className="flex flex-col gap-2" aria-label="Mobile primary">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-[color:var(--text-secondary)] transition-colors hover:border-white/10 hover:bg-white/5 hover:text-[color:var(--text-primary)]",
                      activeId === item.id && "border-white/10 bg-white/5 text-[color:var(--text-primary)]"
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-5">
                <LinkButton
                  href={`#${SECTION_IDS.contact}`}
                  variant="primary"
                  className="w-full"
                  prefillMessage={SITE.stayPrefill}
                  onClick={closeMenu}
                >
                  Enquire Now
                </LinkButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
