import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { MANAGED_ERP, MARQUEE, WHY_CHOOSE, WHY_TRUST } from "@/data/home";

/** "Why Choose Us" — six pill-shaped outline cards (".approach-carso .why-item"). */
export function WhyChooseUs() {
  return (
    <section className="section-pad bg-page">
      <div className="container-tl">
        <Reveal className="mb-14 text-center md:mb-20">
          <span className="pill mb-6">Why Choose Us</span>
          <h2 className="text-[28px] font-semibold md:text-[36px]">Are These IT Challenges Slowing Your Business?</h2>
          <h3 className="mt-2 text-[22px] font-semibold md:text-[28px]">We Solve It With</h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[200px] border border-[#d9d9d9] px-10 py-[60px] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2d8cff]">
                <Image src={w.icon} alt="" width={80} height={80} className="mb-5 h-[72px] w-[72px] object-contain" />
                <h4 className="text-[20px] font-semibold leading-[30px] md:text-[22px]">{w.title}</h4>
                <p className="copy mt-3 !text-[14px]">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Green scrolling band of service names (".serv-marq.ser-marquee"). */
export function ServicesMarquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <section className="overflow-hidden bg-lime py-5" aria-label="Our services">
      <div className="marquee-track">
        {row.map((m, i) => (
          <div key={i} className="flex shrink-0 items-center" aria-hidden={i >= MARQUEE.length}>
            <span className="text-[24px] font-semibold text-white md:text-[32px]">{m}</span>
            <span className="mx-8 text-[36px] text-white/90 md:mx-12 md:text-[50px]" style={{ WebkitTextStroke: "1px #fff", color: "transparent" }}>
              ✻
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** "Managed ERP & Cloud Services" 2×2 list (".blog-list-half.crev"). */
export function ManagedErp() {
  return (
    <section className="bg-white pb-[120px] pt-[100px]">
      <div className="container-tl">
        <Reveal className="mb-14 max-w-[850px] md:mb-20">
          <h2 className="text-[32px] font-semibold md:text-[45px]">Managed ERP &amp; Cloud Services</h2>
          <p className="copy mt-5">
            We provide fully managed ERPNext, cloud hosting, integrations, and enterprise infrastructure so you can focus
            on your business while we handle the technology.
          </p>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-y-12">
          {MANAGED_ERP.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.1}>
              <Link href={m.href} className="group grid items-center gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={m.image}
                    alt={m.title}
                    width={600}
                    height={420}
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="aspect-[10/7] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-[22px] font-semibold transition-colors group-hover:text-navy">{m.title}</h3>
                  <p className="copy">{m.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Why Businesses Across UAE Trust Trueline" (".block-sec.ind-why"). */
export function WhyTrust() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tl grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal className="mb-10">
            <h2 className="text-[28px] font-semibold md:text-[36px]">Why Businesses Across UAE Trust Trueline Technologies</h2>
          </Reveal>
          <div className="space-y-8">
            {WHY_TRUST.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="flex items-center gap-6 md:gap-12">
                  <Image src={w.icon} alt="" width={60} height={60} className="h-[60px] w-[60px] shrink-0 object-contain" />
                  <div>
                    <h3 className="text-[18px] font-medium md:text-[20px]">{w.title}</h3>
                    <p className="copy mt-2 !leading-[1.8]">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="relative lg:col-span-5" delay={0.15}>
          <Image
            src="/images/view-professional-handshake-business-people_23-2150917038.avif"
            alt="Business partnership"
            width={960}
            height={960}
            sizes="(max-width: 1024px) 100vw, 480px"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <Link
            href="/about-us"
            aria-label="Explore more about Trueline"
            className="group absolute left-1/2 top-1/2 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-[2px]"
          >
            <svg viewBox="0 0 170 170" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <path id="circlePath" d="M85,85 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" />
              </defs>
              <text fontSize="13" letterSpacing="5" fill="#1d1d1d" fontWeight="500">
                <textPath href="#circlePath">EXPLORE MORE - EXPLORE MORE - </textPath>
              </text>
            </svg>
            <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <Play size={18} fill="#1d1d1d" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
