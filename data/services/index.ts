/**
 * Service page content. Each JSON file was extracted from the matching live
 * page on truelinetechnologies.com (see README → "Content source") and is
 * rendered block-by-block by components/sections/BlockRenderer.
 */
import acronis from "./acronis.json";
import cctv from "./cctv.json";
import cloudSolutions from "./cloud-solutions.json";
import cyberSecurity from "./cyber-security.json";
import doorAccess from "./door-access-system.json";
import eCommerce from "./e-commerce.json";
import erpnext from "./erpnext.json";
import gateBarrier from "./gate-barrier-system.json";
import googleAds from "./google-ads.json";
import googleWorkspace from "./google-workspace.json";
import itAmc from "./it-amc.json";
import managedIt from "./managed-it-services.json";
import metaAds from "./meta-ads.json";
import microsoft365 from "./microsoft-365.json";
import odoo from "./odoo.json";
import pabx from "./pabx.json";
import smm from "./social-media-marketing.json";
import cabling from "./structured-cabling.json";
import webDev from "./web-development.json";
import wifi from "./wifi-solutions.json";

type Btn = { label: string; href: string };
type Item = { icon?: string; image?: string; title: string; text?: string; bestFor?: string };

export type Block =
  | { type: "hero"; title: string; subtitle: string; paragraphs: string[]; cta?: Btn; image: string }
  | { type: "intro"; title: string; paragraphs: string[] }
  | { type: "cards"; tag?: string; title: string; lead?: string; bg?: string; items: Item[] }
  | { type: "iconList"; tag?: string; title: string; lead?: string; bg?: string; items: Item[] }
  | { type: "imageText"; image: string; title: string; paragraphs: string[] }
  | { type: "cta"; image: string; title: string; text?: string; buttons: Btn[] }
  | { type: "process"; tag?: string; title: string; lead?: string; steps: { title: string; text: string }[] }
  | { type: "darkCards"; tag?: string; title: string; lead?: string; items: Item[] }
  | { type: "numbered"; tag?: string; title: string; lead?: string; items: Item[] }
  | { type: "models"; tag?: string; title: string; lead?: string; items: Item[] }
  | { type: "benefitCards"; tag?: string; title: string; lead?: string; items: Item[] }
  | { type: "platforms"; tag?: string; title: string; lead?: string; items: Item[] }
  | { type: "faq"; tag?: string; title: string; lead?: string; items: { q: string; a: string }[] }
  | {
      type: "comparison";
      tag?: string;
      title: string;
      lead?: string;
      columns: string[];
      rows: { feature: string; values: string[] }[];
      note?: string;
    }
  | { type: "capability"; tag?: string; title: string; text: string };

export type ServicePage = { slug: string; description: string; blocks: Block[] };

const PAGES = [
  cctv, pabx, doorAccess, gateBarrier, wifi, cabling,
  itAmc, managedIt,
  erpnext, odoo, webDev, eCommerce, googleAds, metaAds, smm,
  cyberSecurity, cloudSolutions, microsoft365, googleWorkspace, acronis,
] as unknown as ServicePage[];

export const SERVICE_SLUGS = PAGES.map((p) => p.slug);

export function getService(slug: string): ServicePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Title + description for <head>, derived from the page hero. */
export function serviceMeta(page: ServicePage) {
  const hero = page.blocks.find((b) => b.type === "hero") as Extract<Block, { type: "hero" }> | undefined;
  const title = hero?.title ?? page.slug;
  const description = hero ? `${hero.subtitle} ${hero.paragraphs[0] ?? ""}`.trim() : page.description;
  return { title, description: truncate(description, 160), image: hero?.image };
}

/** Cut at a word boundary so meta descriptions never end mid-word. */
function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:—-]+$/, "")}…`;
}
