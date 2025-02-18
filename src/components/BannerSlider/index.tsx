"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/images/banner1.jpg", "/images/banner2.jpg"];
const BannerSlider = () => {
  return (
    <div className="group relative w-full overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[80vh] w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="arrow-left absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-white p-2 text-white opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white hover:text-black group-hover:opacity-100">
        <FaChevronLeft size={18} />
      </button>

      <button className="arrow-right absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-white p-2 text-white opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white hover:text-black group-hover:opacity-100">
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default BannerSlider;
