import { SITE, SOCIALS } from "@/data/site";

/** Fixed bottom-left social stack (".floating-social-icons"). */
export default function FloatingSocial() {
  const items = [
    { href: SITE.whatsapp, icon: "fa-whatsapp", label: "WhatsApp", bg: "bg-[#25D366]" },
    { href: SOCIALS.facebook, icon: "fa-facebook-f", label: "Facebook", bg: "bg-[#1877F2]" },
    { href: SOCIALS.linkedin, icon: "fa-linkedin-in", label: "LinkedIn", bg: "bg-[#0077B5]" },
    {
      href: SOCIALS.instagram,
      icon: "fa-instagram",
      label: "Instagram",
      bg: "bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]",
    },
  ];
  return (
    <div className="fixed bottom-4 left-4 z-[800] flex flex-col gap-3 md:bottom-5 md:left-5">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[16px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 md:h-[35px] md:w-[35px] ${s.bg}`}
        >
          <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
