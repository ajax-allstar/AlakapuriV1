import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const themeInitScript = `
  try {
    const storedTheme = window.localStorage.getItem("alakapuri-theme");
    const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export const metadata: Metadata = {
  title: "Alakapuri Restaurant | Nedumkunnam, Kerala",
  description:
    "Discover Alakapuri Restaurant in Nedumkunnam, known for Kerala favourites, warm hospitality, and everyday family dining since 1983.",
  keywords: [
    "Alakapuri Restaurant",
    "restaurant in Nedumkunnam",
    "Kerala restaurant Nedumkunnam",
    "porotta Nedumkunnam",
    "Kerala meals Karukachal",
    "family restaurant Nedumkunnam"
  ],
  openGraph: {
    title: "Alakapuri Restaurant | Nedumkunnam, Kerala",
    description:
      "A local restaurant in Nedumkunnam serving Kerala favourites, everyday meals, and warm family dining.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[color:var(--button-primary-text)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
