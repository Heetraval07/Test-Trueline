import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/sections/BlockRenderer";
import { SERVICE_SLUGS, getService, serviceMeta } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) return {};
  const { title, description, image } = serviceMeta(page);
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, images: image ? [image] : undefined },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) notFound();
  return <BlockRenderer blocks={page.blocks} />;
}
