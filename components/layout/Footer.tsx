import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { QUICK_LINKS, SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-tl pb-10 pt-12 md:pb-20 md:pt-20">
        <Link
          href="/contact-us"
          className="group mb-10 flex items-center justify-center gap-4 rounded-xl border border-line px-4 py-6 text-center md:mb-20 md:py-4"
        >
          <span className="text-[40px] font-semibold leading-none sm:text-[60px] lg:text-[80px]">
            Let&apos;s <span className="text-navy">Connect</span>
          </span>
          <ArrowUpRight
            className="h-10 w-10 shrink-0 text-cyan transition-transform duration-300 group-hover:rotate-45 sm:h-16 sm:w-16"
            strokeWidth={1.5}
          />
        </Link>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h6 className="mb-5 text-[22px] font-medium">Address</h6>
            <p className="text-[16px] font-light leading-[1.8] text-black">{SITE.address}</p>
          </div>
          <div>
            <h6 className="mb-5 text-[22px] font-medium">Contact Us</h6>
            <p className="mb-2.5 text-[16px] font-light leading-[1.8] text-black">
              <a href={SITE.emailHref} className="hover:text-navy">{SITE.email}</a>
            </p>
            <p className="text-[16px] font-light leading-[1.8] text-black">
              <a href={SITE.phoneHref} className="hover:text-navy">{SITE.phone}</a>
            </p>
          </div>
          <div>
            <h6 className="mb-5 text-[22px] font-medium">Quick Links</h6>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] uppercase tracking-[2px] text-navy transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <div className="container-tl flex items-center justify-between gap-4">
          <Link href="/" className="hidden w-[230px] md:block" aria-label={SITE.name}>
            <Image src={SITE.logo} alt={SITE.name} width={460} height={100} className="h-auto w-full" />
          </Link>
          <p className="ml-auto text-[13px]">© {new Date().getFullYear()} - Trueline Technologies.</p>
        </div>
      </div>
    </footer>
  );
}
