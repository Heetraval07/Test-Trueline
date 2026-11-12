import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StatsTestimonials from "@/components/home/StatsTestimonials";

const STORY =
  "True line Technologies is a trusted IT System Integrator in the Middle East with headquarter in Dubai. Founded in 2017 by a team of keen individuals with an extraordinarily flawless vision of the future, True line IT Solutions is a master provider of a wide range of IT Business Solutions, Management Solutions and Managed Services to cater to the ever-changing IT and business needs of the region with the most complete portfolio in the industry, under a single hallmark.";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trueline Technologies is a trusted IT System Integrator in the Middle East, headquartered in Dubai and founded in 2017.",
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  const words = Array.from({ length: 6 });
  return (
    <>
      {/* ".page-header.abt-pg-hdr" */}
      <header className="overflow-hidden bg-page pt-16 md:pt-[200px]">
        <div className="container-tl grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h6 className="sub-label mb-4 flex items-center gap-4">
              <span className="h-1 w-1 rounded-full bg-ink" /> Trueline Technologies
            </h6>
            <h1 className="text-[38px] font-semibold leading-[1.3] md:text-[55px]">
              Your Trusted
              <br />
              Security Partner
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="copy mt-2 md:mt-8">{STORY}</p>
          </Reveal>
        </div>
        {/* giant outlined "About Us" marquee */}
        <div className="mt-12 overflow-hidden pt-4 md:mt-28" aria-hidden="true">
          <div className="marquee-track" style={{ animationDuration: "30s" }}>
            {words.map((_, i) => (
              <span
                key={i}
                className={`mr-20 shrink-0 whitespace-nowrap text-[70px] font-extrabold uppercase leading-[0.8] md:text-[150px] ${
                  i % 2 ? "text-outline font-normal" : "text-ink"
                }`}
              >
                About Us
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ".pg-about" */}
      <section className="section-pad bg-white">
        <div className="container-tl">
          <div className="grid gap-[30px] lg:grid-cols-12">
            <Reveal className="relative h-[300px] overflow-hidden rounded-[10px] md:h-[400px] lg:col-span-4">
              <Image
                src="/images/business-team-analyzing-financial-data-modern-office_961925-708.avif"
                alt="Trueline team analysing data"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1} className="relative hidden h-[400px] overflow-hidden rounded-[10px] md:block lg:col-span-8">
              <Image
                src="/images/group-young-business-people-working-office-1-scaled.jpg"
                alt="Trueline team in the office"
                fill
                sizes="(max-width: 1024px) 100vw, 820px"
                className="object-cover"
              />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:mt-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="sub-label">Our Story</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <p className="text-[19px] font-semibold leading-[1.5] md:text-[24px]">{STORY}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsTestimonials />
    </>
  );
}
