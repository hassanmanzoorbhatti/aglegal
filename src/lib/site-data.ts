export const FIRM = {
  name: "AG Legal Group",
  legalName: "AG Legal Group",
  description:
    "Clear, practical, fixed-fee legal drafting and dispute support for individuals and small businesses across England and Wales.",
  email: "Info@aglegalgroup.co.uk",
  phone: "07760 599994",
  phoneTel: "+447760599994",
  whatsapp: "https://wa.me/447760599994?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20legal%20services",
  website: "https://www.aglegalgroup.co.uk/",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const HERO_STATS = [
  { number: "Fixed", label: "Transparent fee approach" },
  { number: "E&W", label: "England & Wales support" },
  { number: "9+", label: "Years' founder experience" },
] as const;

export const STATS = HERO_STATS;
