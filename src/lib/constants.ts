export const SITE = {
  name: "Alakapuri Restaurant",
  shortName: "ALAKAPURI",
  subtitle: "Restaurant Since 1983",
  location: "Nedumkunnam, Kerala 686542, India",
  shortLocation: "Nedumkunnam & Karukachal",
  description:
    "A long-running restaurant in Nedumkunnam known for Kerala favourites, dependable service, and everyday local dining.",
  phoneDisplay: "+91 94968 02102",
  phoneHref: "tel:+919496802102",
  secondaryPhoneDisplay: "+91 70250 70277",
  secondaryPhoneHref: "tel:+917025070277",
  menuDisplay: "hotel-alakapury.business.site",
  menuUrl: "https://hotel-alakapury.business.site",
  hoursDisplay: "Open · Closes 11:00 PM",
  deliveryDisplay: "Delivery now · Ends 10:30 PM",
  priceRange: "₹1–200 per person",
  serviceOptions: "All you can eat · Vegan options",
  packagePrefill:
    "Hello Alakapuri Restaurant, I would like to enquire about website and branding updates for the restaurant.",
  diningPrefill:
    "Hello Alakapuri Restaurant, I would like to enquire about your menu and dining options.",
  stayPrefill: "Hello Alakapuri Restaurant, I would like to contact your restaurant.",
  contactPrefill:
    "Hello Alakapuri Restaurant, I would like to know more about your restaurant, menu, and timings."
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  menu: "menu",
  gallery: "gallery",
  founders: "founders",
  dining: "menu",
  stay: "stay",
  features: "features",
  contact: "contact"
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Founders", href: "/founders" },
  { label: "Contact", href: "/contact" }
] as const;
