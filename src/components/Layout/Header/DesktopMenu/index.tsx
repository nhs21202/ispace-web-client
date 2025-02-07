import { MenuListItem } from "@/utilities/types/menu.type";
import { WebSettingsType } from "@/utilities/types/settings.type";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import MenuItemLevel1 from "./MenuItemLevel1";
import BlockPlaceholder from "@/components/BlockPlaceholder";

type Props = {
  menus?: MenuListItem[];
  webInfos?: WebSettingsType | null;
  pagePostSlug?: string;
};

const DesktopMenu = ({ webInfos, menus, pagePostSlug }: Props) => {
  return (
    <div className="container mx-auto flex h-full flex-grow justify-center lg:justify-between">
      <div className="flex h-full items-center justify-center pl-32 lg:ml-0">
        {webInfos?.SITE_SETTING?.logoHeader?.src ? (
          <Link href={"/"}>
            <Image
              src={webInfos?.SITE_SETTING?.logoHeader?.src}
              className="h-16 max-w-48 w-fit object-contain"
              alt="logo"
              height={webInfos?.SITE_SETTING?.logoHeader?.height || 64}
              width={webInfos?.SITE_SETTING?.logoHeader?.width || 64}
              priority
            />
          </Link>
        ) : (
          <BlockPlaceholder text="logo" className="h-10 w-40" />
        )}
      </div>
      <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
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
