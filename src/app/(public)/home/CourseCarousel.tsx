"use client";
import React from "react";
import ComponentTitle from "./ComponentTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { A11y, Navigation, Pagination } from "swiper/modules";
import ReadmoreButton from "@/components/ReadmoreButton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { courses } from "@/mocks/courses";

const CourseCarousel = () => {
  return (
    <div className="py-10">
      <ComponentTitle title="KHÓA HỌC ĐA DẠNG PHÙ HỢP VỚI MỌI LỨA TUỔI" />
      <div className="relative bg-primary p-10 mt-5">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop
          navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
          modules={[Navigation, Pagination, A11y]}
          className="py-10"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src={course.image}
                  width={500}
                  height={300}
                  alt={course.title}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="flex flex-col items-center justify-center p-10">
                  <h3 className="text-center text-xl font-bold uppercase text-primary">
                    {course.title}
                  </h3>
                  <p className="text-center mt-2 text-base">{course.description}</p>
                  <ReadmoreButton
                    href={course.link}
                    className="mt-4 w-60 hover:w-64"
                    title="Xem chương trình"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="arrow-left absolute left-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
          <FaChevronLeft size={20} />
        </button>

        <button className="arrow-right absolute right-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white p-2 text-primary shadow-lg transition-all duration-300 hover:bg-primary hover:text-white">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CourseCarousel;
