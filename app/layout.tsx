import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Alakapuri | Restaurant in Nedumkunnam, Kerala",
  description:
    "Discover Hotel Alakapuri, a restaurant in Nedumkunnam known for porotta, biriyani, Kerala meals, and local favourites since 1983.",
  keywords: [
    "Hotel Alakapuri",
    "restaurant in Nedumkunnam",
    "Alakapuri Restaurant",
    "biriyani Nedumkunnam",
    "porotta beef Nedumkunnam",
    "Kerala meals Karukachal",
    "family restaurant Nedumkunnam"
  ],
  openGraph: {
    title: "Hotel Alakapuri | Restaurant in Nedumkunnam, Kerala",
    description:
      "A local restaurant in Nedumkunnam serving Kerala favourites, biriyani, porotta specials, and everyday meals.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
