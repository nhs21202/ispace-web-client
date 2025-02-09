"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import menus from "../Header/menus";

const Footer = () => {
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const coursesMenu = menus.find((menu) => menu.title === "Khóa học");

  return (
    <div className="bg-primary pb-4 pt-8">
      <div className="mb-6 flex flex-col items-center">
        <Image
          src="/images/Logo horizontal white.png"
          className="h-24 w-fit max-w-72 object-contain"
          alt="logo"
          height={200}
          width={500}
          priority
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 text-center text-white md:grid-cols-3 md:text-left">
        <div>
          <p className="mb-3 text-lg font-bold">Khóa học</p>
          <ul className="text-md list-inside list-disc space-y-2 pl-4 text-slate-300">
            {coursesMenu?.children?.map((course) => (
              <li key={course.id} className="py-1">
                <Link
                  href={course.link || "#"}
                  className="text-white hover:text-gray-300"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-lg font-bold">Thông tin liên hệ</p>
          <ul className="text-md space-y-2">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaMapMarkerAlt />
              <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhoneAlt />
              <span>0123 456 789</span>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhoneAlt />
              <span>0987 654 321</span>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhoneAlt />
              <span>0345 678 910</span>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhoneAlt />
              <span>0765 432 109</span>
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <FaEnvelope />
              <span>contact@ispace.edu.vn</span>
            </li>
          </ul>
        </div>

        {/* Facebook Page Plugin */}
        <div className="flex justify-center">
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

      {/* Copyright */}
      <div className="container mx-auto mt-6">
        <hr className="mb-4 border-t border-white" />
        <p className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Trung tâm Anh ngữ ISPace. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
