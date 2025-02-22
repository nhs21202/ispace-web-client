"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { teachers } from "@/mocks/teachers";
import ComponentTitle from "@/components/ComponentTitle";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TeacherCarousel = () => {
  return (
    <div className="mx-auto mb-10 w-full max-w-6xl">
      <ComponentTitle title="ĐỘI NGŨ GIÁO VIÊN BẢN NGỮ & VIỆT NAM GIÀU KINH NGHIỆM" />
      <div className="relative">
        <Swiper
          spaceBetween={20}
          loop
          navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
          modules={[Navigation, Pagination, A11y]}
          className="relative mt-5 w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index}>
              <div className="h-[350px] border border-slate-200 p-6 text-center shadow-lg">
                <div className="mb-4 flex justify-center">
                  <Image
                    width={100}
                    height={100}
                    src={teacher.image}
                    alt={teacher.name}
                    className="z-52 -top-10 h-24 w-24 rounded-full border-2 border-primary object-cover"
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
        <button className="arrow-left absolute left-[-20px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white md:left-[-40px]">
          <FaChevronLeft size={20} />
        </button>

        <button className="arrow-right absolute right-[-20px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white md:right-[-40px]">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TeacherCarousel;
