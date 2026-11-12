import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Trueline Technologies — ${SITE.phone}, ${SITE.email}. ${SITE.address}`,
  alternates: { canonical: "/contact-us" },
};

const CARDS = [
  { icon: "fa-envelope", title: "Email Address", text: "Have questions? Reach out to us via email.", lines: [SITE.email], href: SITE.emailHref },
  { icon: "fa-headset", title: "Need Help?", text: "We're here to help! Contact us today for inquiries and support.", lines: [SITE.phone], href: SITE.phoneHref },
  { icon: "fa-map-marker-alt", title: "Office Address", text: "Visit us at our convenient location for personalized assistance.", lines: [...SITE.addressLines] },
];

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact Trueline Technologies</h1>
      {/* ".contact-info-section" */}
      <section className="bg-page py-16 md:py-[100px]">
        <div className="container-tl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="h-full rounded-2xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(0,0,0,.05)] transition-transform duration-300 hover:-translate-y-1">
                <span className="mx-auto mb-6 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#e8eeff] text-[24px] text-[#1a4dff]">
                  <i className={`fas ${c.icon}`} aria-hidden="true" />
                </span>
                <h2 className="mb-4 text-[24px] font-medium">{c.title}</h2>
                <p className="copy mb-5">{c.text}</p>
                {c.href ? (
                  <a href={c.href} className="text-[17px] font-semibold hover:text-navy">{c.lines[0]}</a>
                ) : (
                  <p className="text-[17px] font-semibold leading-[1.6]">
                    {c.lines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection
        tag="Contact Us"
        title="Let us tailor a service package that meets your needs"
        text="Tell us a little about your business, and we will get back to you with some suggestions."
        bg="bg-white"
      />

      {/* ".google-map-sec" */}
      <section aria-label="Office location map" className="bg-page">
        <iframe
          src={SITE.mapEmbed}
          title="Trueline Technologies office location"
          className="block h-[400px] w-full border-0 md:h-[550px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
