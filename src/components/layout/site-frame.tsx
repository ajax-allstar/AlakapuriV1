import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="page-shell">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb left-[-8rem] top-[8rem] h-72 w-72 bg-primary/15" />
        <div className="ambient-orb right-[-6rem] top-[28rem] h-80 w-80 bg-secondary/15" />
        <div className="ambient-orb bottom-[-7rem] left-1/3 h-72 w-72 bg-highlight/10" />
        <div className="absolute inset-0 soft-grid opacity-[0.16]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <Navbar />

      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
}
