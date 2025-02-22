"use client";
import React from "react";
import ComponentTitle from "@/components/ComponentTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { A11y, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import ReadmoreButton from "@/components/ReadmoreButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { courses } from "@/mocks/courses";

const CourseCarousel = () => {
  return (
    <div className="py-10">
      <ComponentTitle title="KHÓA HỌC ĐA DẠNG PHÙ HỢP VỚI MỌI LỨA TUỔI" />
      <div className="relative mt-5 bg-primary p-5 md:p-10 rounded-lg shadow-md">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop
          slidesPerView={1} 
          coverflowEffect={{
            rotate: 10,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          className="py-10"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              {({ isActive }) => (
                <div
                  className={`flex h-[450px] md:h-[500px] flex-col overflow-hidden rounded-lg bg-white transition-all duration-500 ${
                    isActive ? "shadow-2xl scale-105" : "shadow-md scale-95"
                  }`}
                >
                  <Image
                    src={course.image}
                    width={500}
                    height={300}
                    alt={course.title}
                    className="h-48 md:h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <h3 className="text-center text-lg md:text-xl font-bold uppercase text-primary">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-center text-sm md:text-base">
                      {course.description}
                    </p>
                    <div className="flex justify-center items-center mt-auto">
                      <ReadmoreButton
                        href={course.link}
                        className="w-48 md:w-60"
                        title="Xem chương trình"
                      />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="arrow-left absolute left-2 md:left-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
          <FaChevronLeft size={20} />
        </button>

        <button className="arrow-right absolute right-2 md:right-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CourseCarousel;
