import type { MetadataRoute } from "next";

/** Local demo: disallow all crawling. Switch to `allow: "/"` only if this is ever approved for deployment. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
