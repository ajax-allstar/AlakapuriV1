import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  BellRing,
  Bot,
  Building2,
  Cloud,
  Cpu,
  Gauge,
  Globe,
  Handshake,
  ImageIcon,
  KeyRound,
  Landmark,
  LayoutTemplate,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MapPin,
  RefreshCcw,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Stars,
  UtensilsCrossed,
  UsersRound,
  Wrench
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const heroChips = [
  "Hotel & Restaurant",
  "Trusted Local Destination",
  "Family Friendly",
  "Hospitality Focused"
];

export const experienceCards: Array<IconItem & { ctaLabel: string; href: string }> = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Experience",
    description:
      "Delicious food, a welcoming atmosphere, and dependable service make Alakapuri a local favourite for family meals, group visits, and relaxed dining.",
    ctaLabel: "Explore Dining",
    href: "#dining"
  },
  {
    icon: BedDouble,
    title: "Hotel Stay Experience",
    description:
      "Comfort, convenience, and warm hospitality shape every stay, creating a calm and welcoming environment for families, travellers, and returning guests.",
    ctaLabel: "Enquire About Stay",
    href: "#stay"
  }
];

export const highlightStats = [
  {
    title: "Trusted Local Destination",
    value: "Warmly Known",
    description: "Recognised in Nedumkunnam for dependable service and genuine hospitality."
  },
  {
    title: "Hotel + Restaurant Experience",
    value: "Two in One",
    description: "Dining and stay come together under one polished and welcoming brand."
  },
  {
    title: "Family Friendly Hospitality",
    value: "Comfort First",
    description: "Spaces feel inviting for everyday visitors, families, and group gatherings."
  },
  {
    title: "Memorable Guest Experience",
    value: "Refined Care",
    description: "Every touchpoint is shaped around comfort, courtesy, and local credibility."
  }
];

export const offerings: IconItem[] = [
  {
    icon: UtensilsCrossed,
    title: "Dining Experience",
    description: "Welcoming restaurant service with food that feels generous, satisfying, and memorable."
  },
  {
    icon: Handshake,
    title: "Local Hospitality",
    description: "A warm, attentive approach that makes guests feel valued from arrival to farewell."
  },
  {
    icon: BedDouble,
    title: "Comfortable Stay",
    description: "Calm, guest-ready spaces designed for convenience, ease, and dependable comfort."
  },
  {
    icon: UsersRound,
    title: "Family Friendly Environment",
    description: "An approachable setting for families looking for comfort, dining, and quality time together."
  },
  {
    icon: Building2,
    title: "Group-Friendly Venue",
    description: "Well suited for shared meals, travel stopovers, and coordinated guest visits."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guest Service",
    description: "Consistent, reliable care grounded in professionalism and local trust."
  }
];

export const diningFeatures: IconItem[] = [
  {
    icon: UtensilsCrossed,
    title: "Signature Dining Atmosphere",
    description: "Comfortable interiors and warm lighting create a refined local setting for relaxed meals."
  },
  {
    icon: Sparkles,
    title: "Quality Preparation",
    description: "Every meal is presented with care, consistency, and hospitality-led attention to detail."
  },
  {
    icon: Stars,
    title: "Memorable Meals",
    description: "The restaurant experience is built around satisfying food and lasting guest impressions."
  },
  {
    icon: UsersRound,
    title: "Warm Group Environment",
    description: "Ideal for families, shared tables, and friendly gatherings that feel easy and welcoming."
  }
];

export const stayFeatures: IconItem[] = [
  {
    icon: BedDouble,
    title: "Comfortable",
    description: "Stay spaces are designed to feel restful, straightforward, and guest-ready."
  },
  {
    icon: BellRing,
    title: "Welcoming",
    description: "Service remains warm and approachable, helping guests settle in with ease."
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "Dependable care and clear hospitality standards support a more confident stay."
  },
  {
    icon: Landmark,
    title: "Hospitality First",
    description: "The experience prioritises calm, convenience, and thoughtful service at every step."
  }
];

export const packageItems: Array<{
  icon: LucideIcon;
  label: string;
  description: string;
  highlight?: boolean;
}> = [
  {
    icon: LayoutTemplate,
    label: "Custom Website",
    description: "A tailored digital presence designed around the brand, audience, and business goals."
  },
  {
    icon: RefreshCcw,
    label: "Annual Redesigns",
    description: "Planned visual refreshes to keep the experience current and premium over time."
  },
  {
    icon: Wrench,
    label: "Monthly Maintenance",
    description: "Ongoing care to keep the website polished, updated, and dependable."
  },
  {
    icon: Cpu,
    label: "3D Animations",
    description: "Tasteful immersive motion and layered visuals that elevate perceived quality.",
    highlight: true
  },
  {
    icon: Bot,
    label: "AI Integration",
    description: "Future-ready intelligent features that support smarter digital experiences.",
    highlight: true
  },
  {
    icon: KeyRound,
    label: "Authentication and Database",
    description: "Secure infrastructure for accounts, protected data, and scalable business workflows.",
    highlight: true
  },
  {
    icon: Cloud,
    label: "Hosting",
    description: "Managed deployment infrastructure to keep the site live and accessible."
  },
  {
    icon: Globe,
    label: "Domain",
    description: "A branded web address that supports discoverability and business credibility."
  },
  {
    icon: Server,
    label: "Weekly auto backups for easy data recovery",
    description: "Recovery-ready protection that keeps important content and website data safer."
  },
  {
    icon: Gauge,
    label: "Enjoy maximum website speed with free CDN",
    description: "Global asset delivery improves load time and helps the website feel faster.",
    highlight: true
  },
  {
    icon: LockKeyhole,
    label: "SSL Security",
    description: "Secure encrypted connections help protect visitors and reinforce trust.",
    highlight: true
  },
  {
    icon: Search,
    label: "SEO Optimization",
    description: "Search-friendly foundations make the business easier to discover online."
  },
  {
    icon: Mail,
    label: "Custom Email",
    description: "Professional communication channels strengthen credibility and brand presentation."
  },
  {
    icon: LifeBuoy,
    label: "Enjoy priority expert support",
    description: "Responsive expert guidance is available when the business needs timely help.",
    highlight: true
  }
];

export const packageConditionNote = "Only available to purchase for 4 years as a set";

export const benefitItems: IconItem[] = [
  {
    icon: Gauge,
    title: "Fast loading performance",
    description: "Optimised delivery keeps the experience responsive across devices and networks."
  },
  {
    icon: Search,
    title: "Better search visibility",
    description: "Search-optimised structure helps more guests discover the business organically."
  },
  {
    icon: LockKeyhole,
    title: "Secure website foundation",
    description: "Security layers support safer browsing, trusted enquiries, and protected data."
  },
  {
    icon: ShieldCheck,
    title: "Business credibility",
    description: "A premium web presence communicates reliability and reinforces local confidence."
  },
  {
    icon: Server,
    title: "Easy recovery with backups",
    description: "Regular backups reduce stress and make restoration far more straightforward."
  },
  {
    icon: Mail,
    title: "Professional communication with custom email",
    description: "Branded email strengthens trust and keeps guest conversations more professional."
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    description: "Ongoing maintenance and expert help keep the website healthy over time."
  },
  {
    icon: Cpu,
    title: "Future-ready website architecture",
    description: "Scalable foundations make it easier to add new features as the brand grows."
  }
];

export const whyChooseItems: IconItem[] = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant + hotel convenience in one brand",
    description: "Guests can enjoy dining and stay planning without switching between different experiences."
  },
  {
    icon: MapPin,
    title: "Local recognition",
    description: "Alakapuri belongs to Nedumkunnam and reflects the confidence of a trusted local destination."
  },
  {
    icon: Handshake,
    title: "Warm hospitality",
    description: "Friendly service and thoughtful attention make both meals and stays feel easy."
  },
  {
    icon: Stars,
    title: "Premium guest experience",
    description: "The brand presentation, environment, and care standard all work together beautifully."
  },
  {
    icon: ImageIcon,
    title: "Memorable environment",
    description: "Dining ambience and stay comfort are designed to leave a strong positive impression."
  },
  {
    icon: ShieldCheck,
    title: "Reliable service",
    description: "Consistency matters, and Alakapuri is positioned around trust, quality, and care."
  }
];

export const galleryItems = [
  {
    src: "/images/gallery/food-platter.svg",
    alt: "Food presentation at Hotel Alakapuri restaurant",
    label: "Food"
  },
  {
    src: "/images/gallery/ambient-evening.svg",
    alt: "Warm ambience at Hotel Alakapuri",
    label: "Ambience"
  },
  {
    src: "/images/gallery/exterior-facade.svg",
    alt: "Exterior view concept for Hotel Alakapuri",
    label: "Exterior"
  },
  {
    src: "/images/gallery/dining-hall.svg",
    alt: "Dining space concept at Hotel Alakapuri",
    label: "Dining"
  },
  {
    src: "/images/gallery/reception-lounge.svg",
    alt: "Reception lounge concept at Hotel Alakapuri",
    label: "Reception"
  },
  {
    src: "/images/gallery/stay-comfort.svg",
    alt: "Stay experience concept at Hotel Alakapuri",
    label: "Stay Experience"
  }
];

export const testimonials = [
  {
    quote: "A welcoming place for both dining and stay. The experience feels warm, organised, and genuinely local.",
    guest: "Family Traveller",
    context: "Guest Impression"
  },
  {
    quote: "Great hospitality and a pleasant experience. It feels dependable whether you are stopping for a meal or planning a stay.",
    guest: "Local Visitor",
    context: "Dining Impression"
  },
  {
    quote: "A trusted local stop for comfort and food. The atmosphere feels calm, friendly, and thoughtfully handled.",
    guest: "Returning Guest",
    context: "Stay Impression"
  }
];
