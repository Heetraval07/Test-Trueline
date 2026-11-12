import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** Homepage "About Us" block (".intro-corp"): overlapping image pair + copy. */
export default function AboutIntro() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tl grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pb-16 pl-[15%] md:pb-20">
          <span className="absolute left-[20%] top-0 h-[150px] w-2 -translate-x-6 bg-cyan" aria-hidden="true" />
          <Image
            src="/images/business-team-working-with-data-modern-office_961925-709.jpg"
            alt="Trueline engineers at work"
            width={880}
            height={880}
            sizes="(max-width: 1024px) 85vw, 440px"
            className="relative ml-auto aspect-square w-[85%] rounded-xl object-cover"
          />
          <Image
            src="/images/digital-transformation-concept_1174912-275.avif"
            alt="Digital transformation"
            width={600}
            height={600}
            sizes="(max-width: 1024px) 50vw, 295px"
            className="absolute bottom-0 left-0 aspect-square w-[50%] rounded-xl border-[6px] border-white object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h6 className="sub-label mb-4">About Us</h6>
          <h2 className="mb-5 text-[28px] font-semibold leading-[1.3] md:text-[36px]">
            Your Trusted Managed <span className="font-bold text-navy">IT &amp; Cybersecurity Partner</span> in UAE
          </h2>
          <p className="copy">
            We help businesses across UAE secure, optimize, and manage their IT infrastructure with proactive monitoring,
            cybersecurity protection, and 24/7 expert support. Our goal is simple — reduce IT risks, improve performance,
            and ensure business continuity.
          </p>
          <Button href="/about-us" variant="outline" className="mt-10 md:mt-12">
            More About Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
