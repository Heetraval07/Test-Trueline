"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { STATS, TESTIMONIALS } from "@/data/site";

/** Numbers row + testimonial slider (".testim-crv2"). Shared by Home and About. */
export default function StatsTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="section-pad bg-white">
      <div className="container-tl">
        <div className="grid grid-cols-2 gap-y-12 border-b border-line pb-20 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <h2
                className={`text-[52px] font-extrabold leading-none tracking-tight sm:text-[70px] lg:text-[90px] ${
                  s.color === "navy" ? "text-navy" : "text-green"
                }`}
              >
                <Counter value={s.value} />
              </h2>
              <h3 className="mt-5 text-[14px] font-medium md:text-[16px]">{s.label}</h3>
            </div>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <span className="pill mb-6">Testimonials</span>
          <h2 className="text-[33px] font-semibold md:text-[45px]">What People Says About Us</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-20 lg:grid-cols-12">
          <div className="relative mx-auto hidden h-[300px] w-[420px] lg:col-span-5 lg:block">
            <span className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full border border-black/50" />
            <Image
              src="/images/sq1.jpg"
              alt=""
              width={600}
              height={600}
              className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full object-cover"
            />
            <span className="absolute left-[80px] top-[80px] flex h-[140px] w-[140px] items-center justify-center rounded-full bg-page">
              <Image src="/images/quote.png" alt="" width={60} height={60} className="h-[60px] w-[60px]" />
            </span>
          </div>

          {/* min-w-0: a Swiper inside a grid item otherwise grows without bound on narrow screens */}
          <div className="min-w-0 lg:col-span-7">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={800}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              onSwiper={(s) => (swiperRef.current = s)}
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.name}>
                  <blockquote className="mb-10 text-[17px] font-normal leading-[1.6] md:text-[19px]">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-7">
                    <Image
                      src="/images/0a52d5e52f7b81f96538d6b16ed5dc2b.jpg"
                      alt=""
                      width={60}
                      height={60}
                      className="h-[60px] w-[60px] rounded-full object-cover"
                    />
                    <div>
                      <h6 className="text-[16px] font-medium">{t.name}</h6>
                      <span className="sub-label mt-1 block !text-[13px] opacity-70">{t.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-10 flex gap-7">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black/20 transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black/20 transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
