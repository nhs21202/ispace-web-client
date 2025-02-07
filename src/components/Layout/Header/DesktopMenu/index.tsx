import { MenuListItem } from "@/utilities/types/menu.type";
import { WebSettingsType } from "@/utilities/types/settings.type";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import MenuItemLevel1 from "./MenuItemLevel1";

type Props = {
  menus?: MenuListItem[];
  webInfos?: WebSettingsType | null;
  pagePostSlug?: string;
};

const DesktopMenu = ({ menus, pagePostSlug }: Props) => {
  return (
    <div className="container flex h-full flex-grow justify-center lg:justify-between">
      <div className="flex h-full items-center justify-center xl:px-28 lg:px-5">
        <Link href={"/"}>
          <Image
            src="/images/Logo horizontal white.png"
            className="h-24 w-fit max-w-60 object-contain"
            alt="logo"
            height={200}
            width={500}
            priority
          />
        </Link>
      </div>

      <div className="hidden items-center justify-center gap-8 xl:gap-10 lg:flex pr-3">
        {menus?.map((item) => (
          <MenuItemLevel1
            key={item.id}
            item={item}
            pagePostSlug={pagePostSlug}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
