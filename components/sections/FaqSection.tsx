"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Block } from "@/data/services";

/** Accordion (".faq-section"). First item starts open, as on the live site. */
export default function FaqSection({ title, items }: Extract<Block, { type: "faq" }>) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#f8fafc] py-[70px] md:py-20">
      <div className="container-tl max-w-[900px]">
        <h2 className="mb-12 text-center text-[30px] font-bold text-[#111827] md:text-[40px]">{title}</h2>
        <div className="flex flex-col gap-4">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${isOpen ? "border-royal/40" : "border-line"}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold md:text-[17px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {it.q}
                  <Plus
                    size={20}
                    className={`shrink-0 text-royal transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 leading-[1.8] text-[#4b5563]">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
