import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Alakapuri | Restaurant & Hotel in Nedumkunnam, Kerala",
  description:
    "Discover Hotel Alakapuri, a trusted restaurant and hotel in Nedumkunnam, Kerala, offering warm hospitality, memorable dining, and a comfortable guest experience.",
  keywords: [
    "Hotel Alakapuri",
    "restaurant in Nedumkunnam",
    "hotel in Nedumkunnam",
    "hotel and restaurant Kerala",
    "family dining Kerala",
    "hospitality in Nedumkunnam"
  ],
  openGraph: {
    title: "Hotel Alakapuri | Restaurant & Hotel in Nedumkunnam, Kerala",
    description:
      "A premium hospitality destination in Nedumkunnam, Kerala for elegant dining, welcoming stays, and trusted local service.",
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
