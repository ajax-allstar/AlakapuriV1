export const SITE = {
  name: "Hotel Alakapuri",
  shortName: "ALAKAPURI",
  subtitle: "Restaurant Since 1983",
  location: "Nedumkunnam, Kerala 686542, India",
  shortLocation: "Nedumkunnam & Karukachal",
  description:
    "A long-running restaurant in Nedumkunnam known for porotta, biriyani, Kerala meals, and everyday local favourites.",
  phoneDisplay: "+91 94968 02102",
  phoneHref: "tel:+919496802102",
  secondaryPhoneDisplay: "+91 91882 02228",
  secondaryPhoneHref: "tel:+919188202228",
  menuDisplay: "hotel-alakapury.business.site",
  menuUrl: "https://hotel-alakapury.business.site",
  hoursDisplay: "Open · Closes 11:00 PM",
  deliveryDisplay: "Delivery now · Ends 10:30 PM",
  priceRange: "₹1–200 per person",
  serviceOptions: "All you can eat · Vegan options",
  packagePrefill:
    "Hello Hotel Alakapuri, I would like to enquire about website and branding updates for the restaurant.",
  diningPrefill:
    "Hello Hotel Alakapuri, I would like to enquire about your menu and special dishes.",
  stayPrefill: "Hello Hotel Alakapuri, I would like to contact your restaurant.",
  contactPrefill:
    "Hello Hotel Alakapuri, I would like to know more about your restaurant, menu, and timings."
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
  { label: "Home", href: `#${SECTION_IDS.home}`, id: SECTION_IDS.home },
  { label: "About", href: `#${SECTION_IDS.about}`, id: SECTION_IDS.about },
  { label: "Menu", href: `#${SECTION_IDS.menu}`, id: SECTION_IDS.menu },
  { label: "Gallery", href: `#${SECTION_IDS.gallery}`, id: SECTION_IDS.gallery },
  { label: "Founders", href: `#${SECTION_IDS.founders}`, id: SECTION_IDS.founders },
  { label: "Contact", href: `#${SECTION_IDS.contact}`, id: SECTION_IDS.contact }
] as const;
