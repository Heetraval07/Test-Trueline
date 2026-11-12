/**
 * TrueConnect — content & service catalogue. The only file to edit when
 * copy, categories or questions change. Kept free of React so a future
 * server/AI-backed version can reuse the same definitions.
 *
 * Every category, sub-service and hint below is taken from the live
 * truelinetechnologies.com navigation and service pages (their hero lines and
 * "What We Offer" cards). Notes on the few judgement calls:
 *  - "Networking" has no dedicated page; the Structured Cabling page describes
 *    itself as the network backbone, so the two are one option.
 *  - "IT Hardware & Software" and "Call Centre Solutions" come from the
 *    homepage services panel (Servers, Desktop, Laptop, Routers, Switches,
 *    Peripherals / the call-centre blurb), not from standalone pages.
 *  - Microsoft 365 appears once (Other Services) to avoid duplication with
 *    Managed IT's "Server & Cloud Management".
 * No pricing, guarantees or capabilities beyond the site's own wording.
 */

export type CategoryId = "it-infra" | "it-amc" | "managed-it" | "erp-digital" | "other";
export type CategoryIcon = "network" | "wrench" | "shield" | "layout" | "cloud";

export type SubService = { id: string; label: string; hint: string; href: string };

export type Category = {
  id: CategoryId;
  icon: CategoryIcon;
  label: string;
  hint: string;
  services: SubService[];
};

export const CATEGORIES: Category[] = [
  {
    id: "it-infra",
    icon: "network",
    label: "IT Infrastructure",
    hint: "CCTV, PABX, access control, WiFi & cabling",
    services: [
      { id: "cctv", label: "CCTV & Surveillance", hint: "IP cameras, AI analytics, NVRs & remote monitoring", href: "/cctv" },
      { id: "pabx", label: "PABX & Business Telephony", hint: "IP, hybrid & traditional PABX, VoIP and IVR", href: "/pabx" },
      { id: "door-access", label: "Door Access Control", hint: "Biometric, RFID, PIN & mobile access, visitor management", href: "/door-access-system" },
      { id: "gate-barrier", label: "Gate Barrier & Vehicle Access", hint: "Boom barriers, RFID, licence plate recognition", href: "/gate-barrier-system" },
      { id: "wifi", label: "Enterprise WiFi Solutions", hint: "Site survey, access points, guest WiFi & monitoring", href: "/wifi-solutions" },
      { id: "cabling", label: "Structured Cabling & Networking", hint: "Data, voice & fiber cabling, server rooms, testing", href: "/structured-cabling" },
    ],
  },
  {
    id: "it-amc",
    icon: "wrench",
    label: "IT AMC",
    hint: "Annual maintenance contracts for your IT",
    services: [
      { id: "amc-endpoints", label: "Desktops, Laptops & Workstations", hint: "Diagnostics, OS support & troubleshooting", href: "/it-amc" },
      { id: "amc-servers", label: "Servers & Storage Systems", hint: "Health checks, patching & backup verification", href: "/it-amc" },
      { id: "amc-network", label: "Networks & Wi-Fi", hint: "Routers, switches, access points & cabling", href: "/it-amc" },
      { id: "amc-printers", label: "Printers & Peripherals", hint: "Printers, scanners & office peripherals", href: "/it-amc" },
      { id: "amc-cloud", label: "Email, Cloud & Software", hint: "Microsoft 365, email accounts & licence management", href: "/it-amc" },
      { id: "amc-security", label: "Security, Backup & Recovery", hint: "Antivirus, firewall checks & backup monitoring", href: "/it-amc" },
    ],
  },
  {
    id: "managed-it",
    icon: "shield",
    label: "Managed IT Services",
    hint: "24/7 monitoring, helpdesk & security",
    services: [
      { id: "mit-monitoring", label: "24/7 Monitoring & Alerts", hint: "Servers, networks & endpoints watched around the clock", href: "/managed-it-services" },
      { id: "mit-helpdesk", label: "Helpdesk & End-User Support", hint: "Remote and on-site support for your team", href: "/managed-it-services" },
      { id: "mit-network", label: "Network Management", hint: "Routers, switches, firewalls & Wi-Fi", href: "/managed-it-services" },
      { id: "mit-server-cloud", label: "Server & Cloud Management", hint: "On-premise, cloud & hybrid environments", href: "/managed-it-services" },
      { id: "mit-security", label: "Cybersecurity Management", hint: "Endpoint protection, patching & threat response", href: "/managed-it-services" },
      { id: "mit-backup", label: "Backup & Disaster Recovery", hint: "Automated backups & continuity planning", href: "/managed-it-services" },
      { id: "mit-strategy", label: "IT Strategy & Consulting", hint: "Quarterly reviews & roadmap planning", href: "/managed-it-services" },
    ],
  },
  {
    id: "erp-digital",
    icon: "layout",
    label: "ERP & Digital Solutions",
    hint: "ERPNext, Odoo, websites & digital marketing",
    services: [
      { id: "erpnext", label: "ERPNext", hint: "Implementation, customization & support", href: "/erpnext" },
      { id: "odoo", label: "Odoo", hint: "Implementation & customization", href: "/odoo" },
      { id: "web-dev", label: "Website Development", hint: "Corporate websites, portals & landing pages", href: "/web-development" },
      { id: "ecommerce", label: "E-Commerce Development", hint: "WooCommerce, Shopify, Magento, custom & ERPNext stores", href: "/e-commerce" },
      { id: "custom-app", label: "Custom Web Applications", hint: "Dashboards, business portals & API integrations", href: "/web-development" },
      { id: "google-ads", label: "Google Ads", hint: "Search, display, shopping & video campaigns", href: "/google-ads" },
      { id: "meta-ads", label: "Meta Ads", hint: "Facebook & Instagram ad campaigns", href: "/meta-ads" },
      { id: "smm", label: "Social Media Marketing", hint: "Content, management & growth for your brand", href: "/social-media-marketing" },
    ],
  },
  {
    id: "other",
    icon: "cloud",
    label: "Other Services",
    hint: "Cyber security, cloud, Microsoft 365 & more",
    services: [
      { id: "cyber", label: "Cyber Security", hint: "SOC, endpoint & email security, VAPT", href: "/cyber-security" },
      { id: "cloud", label: "Cloud Solutions", hint: "Azure, cloud migration & hybrid cloud", href: "/cloud-solutions" },
      { id: "m365", label: "Microsoft 365", hint: "Licensing, migration, Teams & management", href: "/microsoft-365" },
      { id: "gws", label: "Google Workspace", hint: "Licensing, Gmail, Drive & admin controls", href: "/google-workspace" },
      { id: "acronis", label: "Acronis Backup & Cyber Protection", hint: "Backup, disaster recovery & anti-ransomware", href: "/acronis" },
      { id: "hardware", label: "IT Hardware & Software", hint: "Servers, desktops, laptops, routers, switches & peripherals", href: "/" },
      { id: "call-centre", label: "Call Centre Solutions", hint: "Inbound, outbound & blended call centre setups", href: "/" },
    ],
  },
];

export const categoryById = (id: CategoryId): Category => CATEGORIES.find((c) => c.id === id) as Category;

export const ALL_SERVICES: (SubService & { categoryId: CategoryId })[] = CATEGORIES.flatMap((c) =>
  c.services.map((s) => ({ ...s, categoryId: c.id }))
);
export const subServiceById = (id: string) => ALL_SERVICES.find((s) => s.id === id);

/** Step 3 — the visitor's main need (single choice). */
export const NEEDS = [
  "New installation or setup",
  "Upgrade or replace an existing system",
  "Ongoing support & maintenance",
  "Fix a current IT issue",
  "Expert advice / consultation",
] as const;

/**
 * Step 4 — short follow-up questions, chosen by the categories picked.
 * AMC plan types and managed-service models are the options listed on the
 * live IT AMC and Managed IT Services pages.
 */
export type Question = { id: string; label: string; options: readonly string[]; when?: CategoryId[] };

export const QUESTIONS: Question[] = [
  { id: "sites", label: "How many sites or locations are involved?", options: ["1 location", "2–5 locations", "6+ locations"], when: ["it-infra"] },
  {
    id: "amcPlan",
    label: "Which type of AMC plan interests you?",
    options: ["Comprehensive", "Non-Comprehensive", "Remote Support", "Custom", "Not sure yet"],
    when: ["it-amc"],
  },
  {
    id: "model",
    label: "Which support model suits you best?",
    options: ["Fully Managed IT", "Co-Managed IT", "Remote Managed", "Custom", "Not sure yet"],
    when: ["managed-it"],
  },
  {
    id: "currentSystem",
    label: "What do you use to run your business today?",
    options: ["Spreadsheets / manual", "Accounting software (e.g. Tally)", "Another ERP", "Nothing yet"],
    when: ["erp-digital"],
  },
  { id: "users", label: "Roughly how many users or devices?", options: ["1–10", "11–50", "51–200", "200+"], when: ["it-amc", "managed-it", "other"] },
];

export const TIMELINE: Question = {
  id: "timeline",
  label: "When are you planning to get started?",
  options: ["Immediately", "Within 1 week", "Within 1 month", "Just exploring"],
};

/** Max contextual questions before the timeline question — keeps step 4 short. */
export const MAX_CONTEXT_QUESTIONS = 2;

export function questionsFor(categories: CategoryId[]): Question[] {
  const picked = QUESTIONS.filter((q) => !q.when || q.when.some((c) => categories.includes(c)));
  return [...picked.slice(0, MAX_CONTEXT_QUESTIONS), TIMELINE];
}

/** Industries — as listed in "Industries We Serve" on the live homepage. */
export const INDUSTRIES = [
  "Corporate Office",
  "Trading",
  "Logistics",
  "Manufacturing",
  "Real Estate",
  "Education",
  "Interior Design",
  "Sports",
  "Other",
] as const;

/** Bot copy. Each entry renders as its own paragraph inside one bubble. */
export const MESSAGES = {
  welcome: [
    "Hello! Welcome to TrueLine Technologies. 👋",
    "We help businesses across the UAE manage, secure and improve their IT infrastructure with reliable technology solutions.",
    "How can we help your business today? You can select more than one option.",
  ],
  services: ["Great choice. Here's what we offer — select everything that's relevant to you."],
  needs: ["Thanks! What do you need help with?", "Pick the option that fits best. You can add a short note too."],
  details: ["Just a couple of quick questions so our team can prepare the right solution for you."],
  company: ["That helps a lot. What's your company called, and which industry are you in?"],
  contact: ["Almost done — how can our team reach you?", "Our IT experts will contact you within 24 hours to discuss your requirements."],
  extra: ["Would you like to add any additional details before we wrap up? This is optional."],
  done: [
    "Thank you — here's a summary of your enquiry.",
    "This is a demo, so nothing has been sent. In the live version our team would contact you within 24 hours.",
  ],
} as const;

export const ASSISTANT = {
  name: "TrueConnect",
  status: "Let's Find the Right IT Solution for You",
  tagline: "Chat with TrueConnect about your IT requirements",
} as const;
