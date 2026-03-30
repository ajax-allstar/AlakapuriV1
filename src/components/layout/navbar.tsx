"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LinkButton } from "@/components/ui/link-button";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={false}
      className={cn("nav-surface fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl", isScrolled && "scrolled")}
    >
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-4 rounded-full px-2 py-1"
            onClick={closeMenu}
          >
            <div className="overflow-hidden rounded-[1.15rem] border border-primary/25 bg-black/30 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/brand/main-icon-for-the-website.png"
                alt="Alakapuri Restaurant brand mark"
                width={56}
                height={56}
                className="h-14 w-14 object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg tracking-[0.28em] text-[color:var(--text-primary)] transition-colors group-hover:text-primary sm:text-xl">
                {SITE.shortName}
              </p>
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--text-secondary)]">
                {SITE.subtitle}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]",
                  pathname === item.href && "bg-white/6 text-[color:var(--text-primary)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LinkButton href={SITE.phoneHref} variant="primary">
              Call Now
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
            className="nav-drawer border-t lg:hidden"
          >
            <div className="section-shell py-6">
              <nav className="flex flex-col gap-2" aria-label="Mobile primary">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border border-transparent px-4 py-3 text-base font-medium text-[color:var(--text-secondary)] transition-colors hover:border-white/10 hover:bg-white/5 hover:text-[color:var(--text-primary)]",
                      pathname === item.href && "border-white/10 bg-white/5 text-[color:var(--text-primary)]"
                    )}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 flex items-center justify-between gap-4">
                <ThemeToggle />
                <LinkButton
                  href={SITE.phoneHref}
                  variant="primary"
                  className="flex-1"
                  onClick={closeMenu}
                >
                  Call Now
                </LinkButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
