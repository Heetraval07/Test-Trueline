"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PARTNERS } from "@/data/home";

/** "Our Trusted Partners" auto-scrolling logo strip (".clients-carso"). */
export default function PartnersCarousel() {
  return (
    <section id="partners" className="scroll-mt-24 bg-page py-[50px]">
      <h2 className="mb-12 text-center text-[22px] font-semibold uppercase md:text-[25px]">Our Trusted Partners</h2>
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
        className="px-4"
      >
        {PARTNERS.map((p) => (
          <SwiperSlide key={p.name}>
            <div className="flex h-[140px] items-center justify-center">
              <Image
                src={p.logo}
                alt={p.name}
                width={180}
                height={120}
                className="h-auto max-h-[120px] w-[180px] object-contain grayscale-0 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
