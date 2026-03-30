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
  Phone,
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
  "Since 1983",
  "All You Can Eat",
  "Vegan Options",
  "Delivery Till 10:30 PM"
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
    title: "Service Options",
    value: "All You Can Eat",
    description: "The current business listing also highlights vegan-friendly choices."
  },
  {
    title: "Open Daily",
    value: "Until 11 PM",
    description: "Late-evening service helps Alakapuri stay practical for family meals and takeaways."
  },
  {
    title: "Delivery Window",
    value: "Till 10:30 PM",
    description: "The restaurant listing shows active delivery support during evening service."
  },
  {
    title: "Price Range",
    value: "₹1–200",
    description: "The listing positions Alakapuri as a local, everyday restaurant with broad appeal."
  }
];

export const offerings: IconItem[] = [
  {
    icon: Sparkles,
    title: "Breakfast & Tiffin",
    description: "Appam, idli, dosa, chapati, porotta, and quick breakfast favourites for regular visitors."
  },
  {
    icon: UtensilsCrossed,
    title: "Kerala Meals",
    description: "Lunch-friendly options and everyday comfort food suited to Nedumkunnam locals and travellers."
  },
  {
    icon: BellRing,
    title: "Signature Rice Dishes",
    description: "Well-loved rice dishes and hearty mains add variety for regular visitors, families, and takeaway orders."
  },
  {
    icon: UsersRound,
    title: "Porotta Specials",
    description: "Porotta with beef roast and other classic combinations lead the restaurant's signature picks."
  },
  {
    icon: Building2,
    title: "Veg & Vegan Choices",
    description: "Vegetarian and vegan-friendly dishes help the menu stay practical for mixed groups."
  },
  {
    icon: Handshake,
    title: "Delivery Friendly Service",
    description: "Phone orders, menu-site browsing, and delivery timing details make ordering more convenient."
  }
];

export const diningFeatures: IconItem[] = [
  {
    icon: UtensilsCrossed,
    title: "Porotta & Beef",
    description: "One of the strongest brand visuals and a familiar draw for the restaurant."
  },
  {
    icon: Stars,
    title: "Signature Rice Favourite",
    description: "Rich presentation and familiar local appeal make this one of the most eye-catching featured dishes."
  },
  {
    icon: ShieldCheck,
    title: "Puttu & Curry",
    description: "A strong Kerala breakfast identity that helps the website feel locally grounded and authentic."
  },
  {
    icon: Gauge,
    title: "Masala Dosa",
    description: "A familiar, approachable favourite that broadens the menu appeal for families and quick visits."
  }
];

export const menuBoards = [
  {
    src: "/images/menu/menu-board-dark.png",
    alt: "Dark menu board for Alakapuri Restaurant",
    label: "Menu Board"
  },
  {
    src: "/images/menu/menu-board-classic.png",
    alt: "Classic menu board for Alakapuri Restaurant",
    label: "Classic Menu"
  }
];

export const founders = [
  {
    role: "Founder",
    name: "Example Founder",
    note: "Replace this with the real founder name and details when available."
  },
  {
    role: "Co-Founder",
    name: "Example Co-Founder",
    note: "Replace this with the real co-founder name and details when available."
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
    src: "/images/brand/main-icon-for-the-website.png",
    alt: "Alakapuri Restaurant brand mark",
    label: "Brand Mark"
  },
  {
    src: "/images/gallery/porotta-beef.png",
    alt: "Porotta and beef dish from Alakapuri Restaurant",
    label: "Porotta & Beef"
  },
  {
    src: "/images/gallery/puttu-curry.png",
    alt: "Puttu and curry dish from Alakapuri Restaurant",
    label: "Puttu & Curry"
  },
  {
    src: "/images/gallery/chicken-biriyani.png",
    alt: "Signature rice dish from Alakapuri Restaurant",
    label: "Signature Rice Dish"
  },
  {
    src: "/images/gallery/masala-dosa.png",
    alt: "Masala dosa from Alakapuri Restaurant",
    label: "Masala Dosa"
  },
  {
    src: "/images/menu/menu-board-dark.png",
    alt: "Menu board image from Alakapuri Restaurant",
    label: "Menu"
  }
];

export const testimonials = [
  {
    quote: "Porotta, Kerala-style favourites, and warm hospitality make this feel like a proper local stop.",
    guest: "Restaurant Example",
    context: "Guest Impression"
  },
  {
    quote: "The menu range and familiar dishes make it easy to recommend for family meals and quick orders.",
    guest: "Local Example",
    context: "Dining Impression"
  },
  {
    quote: "The business identity now feels much closer to the real restaurant brand shown in the uploaded visuals.",
    guest: "Brand Example",
    context: "Brand Impression"
  }
];
