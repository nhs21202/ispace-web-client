"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import menus from "../Header/menus";

const Footer = () => {
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const coursesMenu = menus.find((menu) => menu.title === "Khóa học");

  return (
    <div className="bg-orange-50 pb-4 pt-8">
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/Logo horizontal white.png"
            className="h-24 w-fit max-w-60 object-contain"
            alt="logo"
            height={200}
            width={500}
            priority
          />
        </div>

        {/* Danh sách khóa học */}
        <div>
          <p className="mb-3 text-lg font-bold">Khóa học</p>
          <ul className="text-md text-slate-500">
            {coursesMenu?.children?.map((course) => (
              <li key={course.id}>
                <Link href={course.link || "#"} className="hover:text-orange-600">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <p className="mb-3 text-lg font-bold">Thông tin liên hệ</p>
          <ul className="text-md text-slate-500 space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-600" />
              <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" />
              <span>0123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" />
              <span>0987 654 321</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" />
              <span>0345 678 910</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" />
              <span>0765 432 109</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-600" />
              <span>contact@ispace.edu.vn</span>
            </li>
          </ul>
        </div>

        {/* Extra Form Placeholder */}
        <div>
          <BlockPlaceholder text="Extra form" className="h-full w-full" />
        </div>
      </div>

      {/* Facebook Page Plugin */}
      <div className="container mx-auto mt-6 flex justify-center">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/ispaceenglishschool"
          data-tabs="timeline"
          data-width="340"
          data-height="300"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      </div>
    </div>
  );
};

export default Footer;
