"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CornerDownRight, MoveRight } from "lucide-react";
import { SERVICE_TABS } from "@/data/home";

/** "Explore Our Services" tabbed panel (".services-tab.modified.revers"). Hover or click switches tab. */
export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const tab = SERVICE_TABS[active];

  return (
    <section id="services" className="scroll-mt-24 bg-page pb-[70px] pt-[70px] md:pb-[120px] md:pt-[80px]">
      <div className="container-tl grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="pill mb-6">Services</span>
          <h2 className="mb-10 text-[33px] font-semibold md:text-[36px]">Explore Our Services</h2>
          <ul className="max-w-[420px]" role="tablist" aria-label="Service groups">
            {SERVICE_TABS.map((t, i) => (
              <li key={t.label} className={i < SERVICE_TABS.length - 1 ? "mb-[15px] border-b border-black/10 pb-[15px]" : ""}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-7 text-left text-[20px] transition-colors md:text-[22px] ${
                    active === i ? "text-navy" : "text-ink hover:text-navy"
                  }`}
                >
                  <span className="w-8 font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{t.label}</span>
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Image
                src={tab.image}
                alt={tab.label}
                width={860}
                height={1060}
                sizes="(max-width: 1024px) 100vw, 430px"
                className="ml-auto aspect-[4/5] w-full rounded-xl object-cover lg:w-[70%]"
              />
              <div
                className="relative -mt-24 ml-4 mr-4 bg-white bg-cover bg-bottom px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,.06)] lg:absolute lg:bottom-5 lg:right-1/2 lg:m-0 lg:min-w-[370px] lg:px-[50px] lg:py-[60px]"
                style={{ backgroundImage: "url(/images/abstact-BG.png)" }}
              >
                {tab.links ? (
                  <ul className="space-y-5">
                    {tab.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex items-center gap-3 text-[14px] font-semibold hover:text-navy">
                          <CornerDownRight size={15} className="text-ink" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-[15px] leading-6 text-black">{tab.text}</p>
                    {tab.more && (
                      <Link
                        href={tab.more}
                        className="mt-8 inline-flex items-center gap-4 rounded-full border border-navy px-4 py-2 text-navy transition-colors hover:bg-navy hover:text-white"
                      >
                        View More <MoveRight size={16} />
                      </Link>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
