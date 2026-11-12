"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/data/home";

/** "Industries We Serve" edge-to-edge carousel (".work-carsouel .work-crus3"). */
export default function IndustriesCarousel() {
  const ref = useRef<SwiperType | null>(null);
  const arrow =
    "flex h-[50px] w-[50px] items-center justify-center rounded-full border border-black/20 transition-colors hover:border-navy hover:bg-navy hover:text-white";
  return (
    <section className="section-pad overflow-hidden bg-page">
      <div className="container-tl mb-12 flex flex-col gap-8 md:mb-20 lg:flex-row lg:items-center">
        <Reveal className="lg:w-1/2">
          <span className="pill mb-6">Industries We Serve</span>
          <h2 className="text-[28px] font-semibold md:text-[36px]">Empowering Diverse Industries with Smart Solutions</h2>
        </Reveal>
        <div className="flex gap-7 lg:ml-auto">
          <button type="button" aria-label="Previous industry" className={arrow} onClick={() => ref.current?.slidePrev()}>
            <ArrowLeft size={16} />
          </button>
          <button type="button" aria-label="Next industry" className={arrow} onClick={() => ref.current?.slideNext()}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        speed={900}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 2.6, spaceBetween: 40 } }}
        onSwiper={(s) => (ref.current = s)}
      >
        {INDUSTRIES.map((ind) => (
          <SwiperSlide key={ind.name}>
            <div className="group relative h-[320px] overflow-hidden md:h-[400px]">
              <Image
                src={ind.image}
                alt={ind.name}
                fill
                sizes="(max-width: 640px) 85vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-10 left-10 bg-white px-4 py-2.5 text-[18px] font-medium">{ind.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
