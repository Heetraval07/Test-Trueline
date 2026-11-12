import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/data/services";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "about-us", "contact-us", ...SERVICE_SLUGS].map((p) => ({
    url: `${SITE.url}/${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
