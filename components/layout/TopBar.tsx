import { SITE, SOCIALS } from "@/data/site";

/** Navy contact strip above the header (".topbar" on the live site). */
export default function TopBar() {
  return (
    <div className="bg-navy py-3 text-white">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-between gap-2 md:flex-row">
        <div className="flex flex-col items-center gap-1.5 md:flex-row md:gap-0">
          <a
            href={SITE.phoneHref}
            className="flex items-center text-[15px] transition-opacity hover:opacity-80 md:border-l md:border-white/30 md:px-5"
          >
            <i className="fa-solid fa-phone mr-2 text-sm" aria-hidden="true" />
            {SITE.phone}
          </a>
          <a
            href={SITE.emailHref}
            className="flex items-center text-[15px] transition-opacity hover:opacity-80 md:border-x md:border-white/30 md:px-5"
          >
            <i className="fa-solid fa-envelope mr-2 text-sm" aria-hidden="true" />
            {SITE.email}
          </a>
        </div>
        <div className="hidden items-center md:flex">
          {[
            { href: SOCIALS.facebook, icon: "fa-facebook-f", label: "Facebook" },
            { href: SOCIALS.linkedin, icon: "fa-linkedin-in", label: "LinkedIn" },
            { href: SOCIALS.instagram, icon: "fa-instagram", label: "Instagram" },
            { href: SOCIALS.youtube, icon: "fa-youtube", label: "YouTube" },
          ].map((s, i, arr) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex w-[50px] justify-center border-l border-white/30 text-sm transition-opacity hover:opacity-80 ${
                i === arr.length - 1 ? "border-r" : ""
              }`}
            >
              <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
