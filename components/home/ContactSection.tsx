import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { SOCIALS } from "@/data/site";

type Props = {
  tag: string;
  title: string;
  text: string;
  showAcronis?: boolean;
  bg?: string;
};

/** Heading + social links left, contact form right (".contact-crev"). Used on Home and Contact. */
export default function ContactSection({ tag, title, text, showAcronis = false, bg = "bg-page" }: Props) {
  return (
    <section className={`section-pad ${bg}`}>
      <div className="container-tl grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="pill mb-6">{tag}</span>
          <h2 className="text-[34px] font-semibold leading-[1.25] md:text-[50px]">{title}</h2>
          <p className="copy mt-3">{text}</p>
          {showAcronis && (
            <Image
              src="/images/acronis-partner.jpg"
              alt="Trueline Technologies — Acronis official cyber protection partner"
              width={660}
              height={260}
              className="my-[30px] h-auto w-[65%]"
            />
          )}
          <ul className="mt-4 flex gap-[30px] text-[18px] font-semibold text-navy">
            <li><a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">Facebook</a></li>
            <li><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">LinkedIn</a></li>
            <li><a href={SOCIALS.instagram} className="hover:text-cyan">Instagram</a></li>
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
