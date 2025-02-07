import { MENU_LINK_TYPE, MenuListItem } from "@/utilities/types/menu.type";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MenuItemLevel3 from "./MenuItemLevel3";
import { cn } from "@/utilities/helper/common.helper";
import LinkWrap from "@/components/LinkWrap";

type Props = {
  item: MenuListItem;
  parentMenu: MenuListItem;
  pagePostSlug?: string;
};

const MenuItemLevel2 = ({ item, parentMenu, pagePostSlug }: Props) => {
  return (
    <div className="group/level2 relative flex min-w-48 cursor-pointer items-center gap-2 bg-white p-3 text-black hover:bg-slate-100">
      <LinkWrap
        href={item?.link || ""}
        className="relative"
        target={item.linkType === MENU_LINK_TYPE.EXTERNAL ? "_blank" : ""}
      >
        <p>{item.title}</p>
      </LinkWrap>
      {item.children?.length ? (
        <IoIosArrowForward className="ml-auto h-3 w-3" />
      ) : null}
      <div
        className={cn(
          "absolute left-full top-0",
          "border border-slate-200 bg-white text-black",
          "invisible group-hover/level2:visible",
          "opacity group-hover/level2:opacity-100",
        )}
      >
        {item.children?.map((item) => {
          return (
            <MenuItemLevel3
              item={item}
              key={item.id}
              parentMenu={parentMenu}
              pagePostSlug={pagePostSlug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItemLevel2;
