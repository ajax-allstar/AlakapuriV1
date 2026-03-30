"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "alakapuri-theme";

function getDocumentTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getDocumentTheme());
  }, []);

  const updateTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Theme switcher">
      <button
        type="button"
        className="theme-toggle-thumb"
        data-active={theme === "dark"}
        aria-pressed={theme === "dark"}
        aria-label="Use dark theme"
        onClick={() => updateTheme("dark")}
      >
        <Moon className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="theme-toggle-thumb"
        data-active={theme === "light"}
        aria-pressed={theme === "light"}
        aria-label="Use light theme"
        onClick={() => updateTheme("light")}
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
