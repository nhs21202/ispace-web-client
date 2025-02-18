"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { teachers } from "@/mocks/teachers";
import ComponentTitle from "./ComponentTitle";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TeacherCarousel = () => {
  return (
    <div className="mx-auto mb-10 w-full max-w-6xl">
      <ComponentTitle title="ĐỘI NGŨ GIÁO VIÊN BẢN NGỮ & VIỆT NAM GIÀU KINH NGHIỆM" />
      <div className = "relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop
          navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
          modules={[Navigation, Pagination, A11y]}
          className="relative mt-5 w-full"
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    width={500}
                    height={300}
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-60 w-60 rounded-full border-8 border-primary object-cover"
                  />
                </div>
                <p className="text-primary">Giáo viên</p>
                <h3 className="mb-2 text-lg font-bold uppercase text-primary">
                  {teacher.name}
                </h3>
                <p className="text-sm italic text-primary">{teacher.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="arrow-left absolute left-[-40px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
  <FaChevronLeft size={20} />
</button>

<button className="arrow-right absolute right-[-40px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
  <FaChevronRight size={20} />
</button>

      </div>
    </div>
  );
};

export default TeacherCarousel;
