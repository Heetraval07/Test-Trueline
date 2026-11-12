"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SITE, type NavItem } from "@/data/site";

const isGroup = (item: NavItem): item is { label: string; children: { label: string; href: string }[] } =>
  "children" in item;

/**
 * Main navigation. Desktop: hover/focus dropdowns with the theme's "rolling
 * text" hover. Mobile (<1024px): hamburger → accordion panel. The bar turns
 * fixed once the visitor scrolls past it, like the live ".nav-scroll" state.
 */
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [fixed, setFixed] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const h = barRef.current?.offsetHeight ?? 0;
      setBarHeight(h);
      setFixed(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href);
  const groupActive = (children: { href: string }[]) => children.some((c) => isActive(c.href));

  return (
    <>
      {/* spacer keeps the page from jumping when the bar becomes fixed */}
      {fixed && <div style={{ height: barHeight }} aria-hidden="true" />}
      <div
        ref={barRef}
        className={`z-[900] w-full border-b border-black/5 bg-white transition-shadow ${
          fixed ? "fixed left-0 top-0 animate-[slideDown_.45s_ease] shadow-[0_8px_30px_rgba(0,0,0,.06)]" : "relative"
        }`}
      >
        <style>{`@keyframes slideDown{from{transform:translateY(-100%)}to{transform:translateY(0)}}`}</style>
        <nav className="container-tl flex items-center justify-between py-[15px]" aria-label="Main">
          <Link href="/" className="block w-[170px] shrink-0 sm:w-[230px]" aria-label={`${SITE.name} home`}>
            <Image src={SITE.logo} alt={SITE.name} width={460} height={100} priority className="h-auto w-full" />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center lg:flex">
            {NAV.map((item) =>
              isGroup(item) ? (
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-[5px] pb-[15px] pt-5 text-[14px] font-semibold uppercase lg:mx-1.5 xl:mx-2.5 ${
                      groupActive(item.children) ? "text-navy" : "text-ink"
                    } hover:text-navy`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown size={14} strokeWidth={2.5} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[255px] translate-y-3 border border-[#ddd] bg-white px-2.5 py-5 opacity-0 shadow-[0_15px_40px_rgba(0,0,0,.08)] transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-[13px] font-medium transition-all hover:translate-x-1 hover:text-navy ${
                          isActive(child.href) ? "text-navy" : "text-ink"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`group/roll relative block h-[65px] overflow-hidden px-[5px] pb-[15px] pt-5 text-[14px] font-semibold uppercase lg:mx-1.5 xl:mx-2.5 ${
                      isActive(item.href) ? "text-navy" : "text-ink"
                    }`}
                  >
                    {/* rolling text hover */}
                    <span className="block h-[30px] overflow-hidden leading-[30px]">
                      <span className="block transition-transform duration-300 group-hover/roll:-translate-y-full">
                        {item.label}
                      </span>
                      <span className="block text-navy transition-transform duration-300 group-hover/roll:-translate-y-full" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>

          <button
            type="button"
            className="p-2 text-ink lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
            >
              <ul className="container-tl max-h-[70vh] overflow-y-auto py-3">
                {NAV.map((item) =>
                  isGroup(item) ? (
                    <li key={item.label} className="border-b border-black/5">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 text-[14px] font-semibold uppercase"
                        aria-expanded={openGroup === item.label}
                        onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openGroup === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openGroup === item.label && (
                        <div className="pb-3 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block py-2 text-[13px] ${isActive(child.href) ? "text-navy" : "text-ink/80"}`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={item.label} className="border-b border-black/5">
                      <Link
                        href={item.href}
                        className={`block py-3 text-[14px] font-semibold uppercase ${isActive(item.href) ? "text-navy" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  <Link href="/contact-us" className="block py-3 text-[14px] font-semibold uppercase">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
