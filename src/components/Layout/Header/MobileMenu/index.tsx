"use client";

import { MenuListItem } from "@/utilities/types/menu.type";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenus from "./MobileMenus";
import { cn } from "@/utilities/helper/common.helper";
import { IoCloseSharp } from "react-icons/io5";

type Props = { menus: MenuListItem[]; pagePostSlug?: string };

const MobileMenu = ({ menus, pagePostSlug }: Props) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSideBar]);

  return (
    <div className="lg:hidden">
      <div className="flex h-full cursor-pointer items-center justify-between hover:text-slate-300">
        <FaBars className="h-8 w-8" onClick={() => setOpenSideBar(true)} />
      </div>

      <div
        className={cn("fixed inset-0 z-30 flex h-full duration-100", {
          "translate-x-0 opacity-100": openSideBar,
          "-translate-x-full select-none opacity-0": !openSideBar,
        })}
      >
        <div
          className={cn(
            "relative flex h-screen w-96 flex-shrink-0 flex-col overflow-auto bg-white pb-10 pt-20",
          )}
        >
          <div className="absolute left-8 top-8">
            <IoCloseSharp
              className="h-8 w-8 cursor-pointer text-black"
              onClick={() => setOpenSideBar(false)}
            />
          </div>
          <MobileMenus
            menus={menus}
            pagePostSlug={pagePostSlug}
            onSelectMenu={() => setOpenSideBar(false)}
          />
        </div>
        <div
          className="h-screen w-screen bg-black/50"
          onClick={() => setOpenSideBar(false)}
        ></div>
      </div>
    </div>
  );
};

export default MobileMenu;
