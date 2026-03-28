"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const updateState = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 18;
      let nextActive = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const top = section.getBoundingClientRect().top + window.scrollY - 180;

        if (scrollY >= top) {
          nextActive = id;
        }
      }

      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled));
      setActiveId((current) => (current === nextActive ? current : nextActive));
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [sectionIds]);

  return { activeId, isScrolled };
}
