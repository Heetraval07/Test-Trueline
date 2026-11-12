import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import type { Block } from "@/data/services";

const bgClass = (bg?: string, fallback = "bg-page") =>
  bg === "light" ? "bg-[#f8f9fa]" : bg === "white" ? "bg-white" : bg === "new" ? "bg-[#05508b0a]" : fallback;

/** Two-column intro (".section-padding" with h3 + paragraphs). */
export function IntroSection({ title, paragraphs }: Extract<Block, { type: "intro" }>) {
  return (
    <section className="section-pad bg-white">
      <div className="container-tl grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 className="text-[28px] font-semibold leading-tight md:text-[36px]">{title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          {paragraphs.map((p) => (
            <p key={p} className="copy mb-5">{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Bordered centred cards (".serv-box.modified"). Shows a FA icon tile when the live card has one, else the ↗ badge. */
export function CardsSection({ tag, title, lead, bg, items }: Extract<Block, { type: "cards" }>) {
  return (
    <section className={`section-pad ${bgClass(bg)}`}>
      <div className="container-tl">
        <SectionHead tag={tag} title={title} lead={lead} className="mb-10" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 0.06}>
              <div className="group h-full rounded-[10px] border border-black/10 p-[30px] text-center transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,.06)]">
                <div className="mb-6 flex justify-center">
                  {it.icon ? (
                    <span className="flex h-[65px] w-[65px] items-center justify-center rounded-[14px] bg-royal/10 text-[26px] text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                      <i className={it.icon} aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black/5 transition-colors group-hover:bg-navy group-hover:text-white">
                      <i className="fa-solid fa-arrow-up-long rotate-45 text-[14px]" aria-hidden="true" />
                    </span>
                  )}
                </div>
                <h3 className="mb-4 border-b border-black/10 pb-4 text-[20px] font-medium">{it.title}</h3>
                {it.text && <p className="copy !leading-[1.8]">{it.text}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Two-column icon list with dividers (".serv-img-reveal"). */
export function IconListSection({ tag, title, lead, bg, items }: Extract<Block, { type: "iconList" }>) {
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <section className={`section-pad ${bgClass(bg)}`}>
      <div className="container-tl">
        <Reveal className="mb-12 md:mb-20">
          {tag && <h6 className="sub-label mb-4">{tag}</h6>}
          <h2 className="text-[32px] font-semibold leading-tight md:text-[50px]">{title}</h2>
          {lead && <p className="copy mt-4 max-w-[900px]">{lead}</p>}
        </Reveal>
        <div className="grid gap-x-[50px] md:grid-cols-2">
          {cols.map((col, c) => (
            <ul key={c}>
              {col.map((it) => (
                <li key={it.title}>
                  <Reveal y={20}>
                    <div className="mb-[30px] flex items-center gap-6 border-b border-black/10 pb-[30px] md:gap-20">
                      <span className="flex w-[50px] shrink-0 justify-center">
                        {it.image ? (
                          <Image src={it.image} alt="" width={50} height={50} className="h-[50px] w-[50px] object-contain" />
                        ) : (
                          <i className={`${it.icon ?? "fa-solid fa-check"} text-[34px] text-royal`} aria-hidden="true" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-[19px] font-medium md:text-[22px]">{it.title}</h3>
                        {it.text && <p className="copy mt-2 !leading-[1.8]">{it.text}</p>}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Image left, heading + copy right (".about-intro"). */
export function ImageTextSection({ image, title, paragraphs }: Extract<Block, { type: "imageText" }>) {
  return (
    <section className="section-pad bg-white">
      <div className="container-tl grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={1100}
            height={730}
            sizes="(max-width: 1024px) 100vw, 610px"
            className="h-auto w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-5 text-[30px] font-semibold leading-tight md:text-[45px]">{title}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="copy mb-3">{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Closing CTA band (".call-action-img"): wide photo with a white text panel overlapping its lower edge. */
export function CtaSection({ image, title, text, buttons }: Extract<Block, { type: "cta" }>) {
  return (
    <section className="overflow-hidden bg-white pt-16 md:pt-0">
      <div className="container-tl">
        <div className="relative h-[260px] w-full md:-ml-[15%] md:h-[450px] md:w-[130%]">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative -mt-24 bg-white py-10 pr-0 md:-mt-[200px] md:mr-[8%] md:py-10 md:pr-10">
          <div className="absolute inset-y-0 right-full w-[400%] bg-white" aria-hidden="true" />
          <Reveal className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-[30px] font-semibold leading-tight md:text-[50px]">{title}</h2>
              {text && <p className="copy mt-4">{text}</p>}
            </div>
            <div className="flex flex-wrap gap-3 lg:ml-auto lg:flex-col">
              {buttons.map((b) => (
                <Button key={b.label} href={b.href === "#" ? "/contact-us" : b.href}>
                  {b.label}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Centred statement (".project-capability"). */
export function CapabilitySection({ tag, title, text }: Extract<Block, { type: "capability" }>) {
  return (
    <section className="section-pad bg-[#f8fafc]">
      <Reveal className="container-tl max-w-[900px] text-center">
        {tag && <h6 className="sub-label mb-4 !text-royal">{tag}</h6>}
        <h2 className="mb-8 text-[32px] font-semibold md:text-[50px]">{title}</h2>
        <p className="text-[17px] leading-[1.9] text-[#555] md:text-[20px]">{text}</p>
      </Reveal>
    </section>
  );
}
