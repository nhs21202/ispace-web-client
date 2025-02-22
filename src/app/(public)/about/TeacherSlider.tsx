"use client"
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
    '/images/teacher-1.jpg',
    '/images/teacher-2.jpg',
    '/images/teacher-3.jpg'
  ];
  
const TeacherSlider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="w-full  mx-auto"
  >
    {images.map((src, index) => (
      <SwiperSlide key={index}>
        <img
          src={src}
          alt={`Teacher ${index + 1}`}
          className="w-full h-  rounded-lg shadow-lg"
          height={400}
          width={400}   
        />
      </SwiperSlide>
    ))}
  </Swiper>  )
}

export default TeacherSlider