import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        elevated: "var(--surface-elevated)",
        primary: "var(--accent-primary)",
        secondary: "var(--accent-secondary)",
        highlight: "var(--accent-highlight)",
        foreground: "var(--text-primary)",
        muted: "var(--text-secondary)"
      },
      boxShadow: {
        ambient:
          "0 24px 80px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 16px 50px rgba(200, 155, 60, 0.18)"
      },
      backgroundImage: {
        "luxury-mesh":
          "radial-gradient(circle at top left, rgba(200,155,60,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(139,30,30,0.2), transparent 28%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(240%) skewX(-18deg)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.15s ease",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
