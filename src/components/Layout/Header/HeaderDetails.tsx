"use client";
import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineMail } from "react-icons/md";
import { MenuListItem } from "@/utilities/types/menu.type";
import { WebSettingsType } from "@/utilities/types/settings.type";
import { cn } from "@/utilities/helper/common.helper";

type Props = {
  pagePostSlug?: string;
  menus: MenuListItem[];
  webInfos?: WebSettingsType | null;
};

const HeaderDetails = ({ pagePostSlug, menus, webInfos }: Props) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;


    if (scrollY > 1) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn("fixed inset-x-0 top-0 z-50 md:sticky bg-white")}
    >
      <div
        className={cn("h-12 w-full", {
  
          "hidden md:block": isHidden,
        })}
      >
        <div className="container mx-auto text-primary font-bold mx-auto flex h-full items-center justify-between gap-10 px-5 md:justify-start md:px-0">
            
          <div className="flex items-center gap-2">
            <TfiHeadphoneAlt />
            <p>
              <span className="hidden md:inline">Hotline:</span>
              0990934956
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <p>
              <span className="hidden md:inline">Email:</span>
              ispaceenglish.edu@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="sticky inset-0 z-30 flex h-24 px-3 bg-primary">
        <MobileMenu menus={menus || []} pagePostSlug={pagePostSlug} />
        <DesktopMenu
          menus={menus || []}
          pagePostSlug={pagePostSlug}
          webInfos={webInfos}
        />
        {/* <div className="mr-5 hidden h-full items-center lg:flex">
          <UserInfoNavbar />
        </div> */}
      </div>
    </div>
  );
};

export default HeaderDetails;
