"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/home";

/** Full-bleed fading hero slider (".slider-prlx") with the theme's vertical guide lines. */
export default function HeroSlider() {
  return (
    <header className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1200}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper h-[640px] md:h-[900px]"
      >
        {HERO_SLIDES.map((s, i) => {
          // one <h1> per page: only the first slide's headline is the page heading
          const Heading = i === 0 ? "h1" : "h2";
          return (
          <SwiperSlide key={i}>
            <div className="relative flex h-full items-center">
              <Image
                src={s.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="scale-105 object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="container-tl relative z-10 text-center text-white">
                <h6 className="sub-label mb-4 flex items-center justify-center gap-3 !font-normal">
                  <ArrowUpRight size={14} /> Trueline Technologies
                </h6>
                <Heading className="mx-auto max-w-[1000px] text-[34px] font-semibold leading-[1.25] sm:text-[44px] md:text-[55px]">
                  {s.before} <span className="text-cyan">{s.highlight}</span>
                  {s.after && <> {s.after}</>}
                </Heading>
                <a
                  href="#services"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-[5px] border border-cyan bg-cyan px-9 py-[15px] text-[14px] font-medium text-white transition-all duration-300 hover:bg-transparent hover:text-cyan"
                >
                  Explore More <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
      {/* ".lines.two" guides */}
      <div className="pointer-events-none absolute inset-y-0 left-[30%] z-10 w-[40%] border-x border-white/10" />
      <style>{`.hero-swiper .swiper-pagination-bullet{background:#fff;opacity:.5;width:10px;height:10px}.hero-swiper .swiper-pagination-bullet-active{background:#03abd7;opacity:1}.hero-swiper .swiper-pagination{bottom:30px!important}`}</style>
    </header>
  );
}
