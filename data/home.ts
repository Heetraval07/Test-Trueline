/** Homepage content — copied from the live homepage. */

const I = (f: string) => `/images/${f}`;

export const HERO_SLIDES = [
  {
    image: I("html-css-collage-concept-with-person.jpg"),
    before: "Secure, Manage & Scale Your IT Infrastructure",
    highlight: "24/7 Support Across UAE",
    after: "",
  },
  {
    image: I("modern-equipped-computer-lab.jpg"),
    before: "Providing",
    highlight: "Best Digital Solutions",
    after: "& Grow Business.",
  },
  {
    image: I("two-young-entrepreneurs-working-computer-reading-email-office.jpg"),
    before: "Providing",
    highlight: "Best Digital Solutions",
    after: "& Grow Business.",
  },
];

export const PARTNERS = [
  { name: "Odoo", logo: I("transparent-Odoo.png") },
  { name: "Meta", logo: I("transparent-meta-scaled-1.png") },
  { name: "Google", logo: I("transparent-google-scaled-1.png") },
  { name: "Frappe", logo: I("transparent-frappe.png") },
  { name: "ERPNext", logo: I("transparent-erpnext-e1780215633705.png") },
  { name: "Acronis", logo: I("transparent-Acronis-scaled-1.png") },
  { name: "HP", logo: I("transparent-hp-1.png") },
  { name: "Kaspersky", logo: I("Kaspersky-Partnership-Badge-1789980216253.png") },
  { name: "Fortinet", logo: I("Fortinet.png") },
  { name: "Lenovo", logo: I("Lenevo.png") },
];

export type ServiceTab = {
  label: string;
  image: string;
  links?: { label: string; href: string }[];
  text?: string;
  more?: string;
};

export const SERVICE_TABS: ServiceTab[] = [
  {
    label: "IT INFRA",
    image: I("it-amc.jpg"),
    links: [
      { label: "CCTV", href: "/cctv" },
      { label: "PABX", href: "/pabx" },
      { label: "Door Access System", href: "/door-access-system" },
      { label: "Gate Barrier System", href: "/gate-barrier-system" },
      { label: "WiFi Solutions", href: "/wifi-solutions" },
      { label: "Structured Cabling", href: "/structured-cabling" },
    ],
  },
  {
    label: "IT AMC",
    image: I("it-infra.jpg"),
    text: "Reliable IT AMC services to ensure smooth system performance, proactive maintenance, quick issue resolution, and uninterrupted business operations.",
    more: "/it-amc",
  },
  {
    label: "Managed Services",
    image: I("cloud.avif"),
    text: "Proactive managed IT services designed to monitor, maintain, and optimize your systems for enhanced security, performance, and business continuity.",
    more: "/managed-it-services",
  },
  {
    label: "ERP & SMM",
    image: I("cybersecurity.jpg"),
    links: [
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
    image: I("managed.jpg"),
    links: [
      { label: "Cyber Security", href: "/cyber-security" },
      { label: "Cloud Solutions", href: "/cloud-solutions" },
      { label: "Microsoft 365", href: "/microsoft-365" },
      { label: "Google Workspace", href: "/google-workspace" },
      { label: "Acronis", href: "/acronis" },
    ],
  },
];

export const WHY_CHOOSE = [
  { icon: I("24-hours-support_17373200.png"), title: "24/7 IT Helpdesk Support", text: "Fast remote & on-site support to keep your business running smoothly." },
  { icon: I("chat-bubble_6048174.png"), title: "Real-Time Monitoring & Support", text: "Immediate response to prevent downtime before it impacts you." },
  { icon: I("puzzle_14014641.png"), title: "Business IT Infrastructure Solutions", text: "Complete IT setup, management & performance optimization." },
  { icon: I("secure_12151904.png"), title: "Managed Security Operations Center (SOC)", text: "Advanced threat detection & continuous cybersecurity monitoring." },
  { icon: I("cloud_11055871.png"), title: "Microsoft Azure & 365 Experts", text: "Secure cloud migration, management & optimization." },
  { icon: I("police_13096448.png"), title: "Advanced Network & Endpoint Security", text: "Firewall protection, endpoint security & infrastructure monitoring." },
];

export const MARQUEE = ["IT AMC", "IT Infra", "Cloud Services", "Cyber Security", "Managed IT Service", "IT Sales and Services", "IT Solutions"];

export const MANAGED_ERP = [
  {
    image: I("cloud-computing-infrastructure-overview-multidevice-connectivity-cloud-systems-data-analytics-cloud-environments-cloud-storage-server-architecture-modern-it-cloud-networking_550524-336.avif"),
    title: "Cloud Infrastructure",
    text: "Secure, scalable cloud hosting with monitoring and backups.",
    href: "/cloud-solutions",
  },
  {
    image: I("cloud-erp-enterprise-resource-planning-concept-businessman-managing-data-with-cloud-computing-hr_1104123-3027.avif"),
    title: "ERP Implementation",
    text: "Complete ERPNext deployment, customization, and support.",
    href: "/erpnext",
  },
  {
    image: I("cloud-erp-enterprise-resource-planning-concept-businessman-managing-data-with-cloud-computing-hr_1104123-3041.avif"),
    title: "Integrations",
    text: "Connect ERPNext with WhatsApp, payment gateways, and APIs.",
    href: "/erpnext",
  },
  {
    image: I("connecting-with-customers-person-with-smartphone-crm-icons-marketing-strategy-crm-photo_980716-332173.avif"),
    title: "CRM",
    text: "Custom CRM implementation to manage leads, automate follow-ups, track sales pipelines, and improve customer engagement.",
    href: "/odoo",
  },
];

export const INDUSTRIES = [
  { name: "Interior Design", image: I("int.avif") },
  { name: "Corporate Office", image: I("cor.avif") },
  { name: "Logistics", image: I("aerial-view-busy-container-port-sunset_23-2152021809.avif") },
  { name: "Real Estate", image: I("amazing-aerial-shot-singapore-cityscape-with-lots-skyscrapers_181624-18618.avif") },
  { name: "Sports", image: I("various-sports-equipment-black-background-studio-shot_93675-164612.avif") },
  { name: "Manufacturing", image: I("workers-overseeing-automated-assembly-lines-hightech-manufacturing_198067-1165111.avif") },
  { name: "Trading", image: I("container-ship-logistic-transportation-concept-aerial-view-business-commercial-trading_10541-9874.jpg") },
  { name: "Education", image: I("how-is-your-deals-group-people-business-conference-modern-classroom-daytime_146671-16408.avif") },
];

export const WHY_TRUST = [
  { icon: I("cyber_12836946.png"), title: "Cybersecurity Protection", text: "Advanced threat detection and 24/7 monitoring to prevent data breaches and cyber attacks before they impact your business." },
  { icon: I("down-time_12601016.png"), title: "Reduced Downtime", text: "Continuous system monitoring ensures maximum uptime and uninterrupted business operations, allowing your team to stay productive without unexpected IT disruptions." },
  { icon: I("revenue_8675256.png"), title: "Cost-Effective Management", text: "Lower IT expenses while improving performance with fully managed support solutions." },
  { icon: I("24-hours-support_17373200.png"), title: "24/7 Expert IT Support", text: "Get immediate assistance from certified IT professionals whenever issues arise remote or on-site across UAE." },
];
