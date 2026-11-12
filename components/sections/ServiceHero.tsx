import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { Block } from "@/data/services";

type Props = Extract<Block, { type: "hero" }>;

/** Service page hero (".portfolio"): copy left, rounded image right, grey page background. */
export default function ServiceHero({ title, subtitle, paragraphs, cta, image }: Props) {
  return (
    <section className="bg-page py-16 md:py-[120px]">
      <div className="container-tl grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h1 className="text-[32px] font-bold leading-tight md:text-[40px]">{title}</h1>
          <h2 className="mt-3 text-[20px] font-semibold md:text-[24px]">{subtitle}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="copy mt-3">{p}</p>
          ))}
          {cta && (
            <Button href={cta.href === "#" ? "/contact-us" : cta.href} className="mt-8">
              {cta.label}
            </Button>
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src={image}
            alt={title}
            width={1220}
            height={740}
            priority
            sizes="(max-width: 1024px) 100vw, 610px"
            className="h-auto w-full rounded-xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
