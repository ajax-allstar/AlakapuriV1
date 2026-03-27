export const SITE = {
  name: "Hotel Alakapuri",
  shortName: "ALAKAPURI",
  subtitle: "Hotel & Restaurant",
  location: "Nedumkunnam, Kerala 686542, India",
  shortLocation: "Nedumkunnam, Kerala 686542",
  description:
    "A trusted destination in Nedumkunnam for warm hospitality, memorable dining, and a comfortable stay.",
  phoneDisplay: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  emailDisplay: "hello@hotelalakapuri.com",
  emailHref: "mailto:hello@hotelalakapuri.com",
  packagePrefill:
    "Hello Hotel Alakapuri, I would like to enquire about the Complete Premium Website Package.",
  diningPrefill:
    "Hello Hotel Alakapuri, I would like to enquire about dining at your restaurant.",
  stayPrefill: "Hello Hotel Alakapuri, I would like to enquire about staying at your hotel."
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  dining: "dining",
  stay: "stay",
  features: "features",
  contact: "contact"
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: `#${SECTION_IDS.home}`, id: SECTION_IDS.home },
  { label: "About", href: `#${SECTION_IDS.about}`, id: SECTION_IDS.about },
  { label: "Dining", href: `#${SECTION_IDS.dining}`, id: SECTION_IDS.dining },
  { label: "Stay", href: `#${SECTION_IDS.stay}`, id: SECTION_IDS.stay },
  { label: "Features", href: `#${SECTION_IDS.features}`, id: SECTION_IDS.features },
  { label: "Contact", href: `#${SECTION_IDS.contact}`, id: SECTION_IDS.contact }
] as const;
