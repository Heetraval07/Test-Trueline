/**
 * Business details and navigation — mirrored from the live site
 * (truelinetechnologies.com). Single source of truth for the header, footer,
 * contact page and chatbot.
 */

export const SITE = {
  name: "Trueline Technologies",
  url: "https://truelinetechnologies.com",
  tagline: "Your Trusted Managed IT & Cybersecurity Partner in UAE",
  phone: "+971 54 765 8506",
  phoneHref: "tel:+971547658506",
  email: "sales@truelinetechnologies.com",
  emailHref: "mailto:sales@truelinetechnologies.com",
  whatsapp: "https://wa.me/+971547658506",
  address: "Office 201-09 , Al Nisf Building, Dubai Airport Road, Dubai, UAE.",
  addressLines: ["Office 201-09 , Al Nisf Building,", "Dubai Airport Road, Dubai, UAE."],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7216.981446780229!2d55.331520893579096!3d25.254072700000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1e6bf8242d%3A0x42b38690afda5895!2sCargo%20Village!5e0!3m2!1sen!2sus!4v1780079913267!5m2!1sen!2sus",
  logo: "/images/logo-trueline.png",
} as const;

/** The live site leaves Instagram and YouTube as "#" placeholders — kept that way. */
export const SOCIALS = {
  facebook: "https://www.facebook.com/truelinetechnologiesdubai",
  linkedin: "https://www.linkedin.com/company/trueline-technologies-llc/",
  instagram: "#",
  youtube: "#",
} as const;

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const NAV: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "IT Infra",
    children: [
      { label: "CCTV", href: "/cctv" },
      { label: "PABX", href: "/pabx" },
      { label: "Door Access System", href: "/door-access-system" },
      { label: "Gate Barrier System", href: "/gate-barrier-system" },
      { label: "WiFi Solutions", href: "/wifi-solutions" },
      { label: "Structured Cabling", href: "/structured-cabling" },
    ],
  },
  { label: "IT AMC", href: "/it-amc" },
  { label: "Managed Services", href: "/managed-it-services" },
  {
    label: "ERP & SMM",
    children: [
      { label: "ERPNext", href: "/erpnext" },
      { label: "Odoo", href: "/odoo" },
      { label: "Web Development", href: "/web-development" },
      { label: "E-Commerce", href: "/e-commerce" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Meta Ads", href: "/meta-ads" },
      { label: "Social Media Marketing", href: "/social-media-marketing" },
    ],
  },
  {
    label: "Other Services",
    children: [
      { label: "Cyber Security", href: "/cyber-security" },
      { label: "Cloud Solutions", href: "/cloud-solutions" },
      { label: "Microsoft 365", href: "/microsoft-365" },
      { label: "Google Workspace", href: "/google-workspace" },
      { label: "Acronis", href: "/acronis" },
    ],
  },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Our Partners", href: "/#partners" },
];

export const STATS = [
  { value: "10+", label: "Years of Experience", color: "navy" },
  { value: "150+", label: "Projects Completed", color: "green" },
  { value: "500+", label: "Happy Customers", color: "navy" },
  { value: "99%", label: "Success Rate", color: "green" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Trueline has been our trusted IT partner for years. Their team is highly responsive, knowledgeable, and proactive in resolving issues before they impact our operations. From network infrastructure to ongoing IT support, they consistently deliver reliable service and exceptional value.",
    name: "Vinod Nambiar",
    role: "Managing Director – Vintron",
  },
  {
    quote:
      "The professionalism and technical expertise of Trueline have helped us maintain a stable and secure IT environment. Their prompt support, attention to detail, and commitment to customer satisfaction make them a valuable technology partner for our business.",
    name: "Thomas",
    role: "Operations Manager – Metal Industries",
  },
  {
    quote:
      "We are extremely satisfied with the IT support services provided by Trueline. Their team understands our business requirements and always delivers timely solutions. Thanks to their dependable support and infrastructure management, our day-to-day operations run smoothly and efficiently.",
    name: "Binoj Pillai",
    role: "General Manager – Al MAS",
  },
] as const;
