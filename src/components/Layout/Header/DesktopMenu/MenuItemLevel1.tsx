import { MENU_LINK_TYPE, MenuListItem } from "@/utilities/types/menu.type";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import MenuItemLevel2 from "./MenuItemLevel2";
import { cn } from "@/utilities/helper/common.helper";
import LinkWrap from "@/components/LinkWrap";

type Props = {
  item: MenuListItem;
  pagePostSlug?: string;
};

const MenuItemLevel1 = ({ item, pagePostSlug }: Props) => {

  return (
    <div className="group/level1 relative flex h-full cursor-pointer items-center gap-2">
      <div className="relative">
        <LinkWrap
          href={item?.link ||""}
          className="relative"
          target={item.linkType === MENU_LINK_TYPE.EXTERNAL ? "_blank" : ""}
        >
          <p className="font-bold uppercase text-white text-lg">{item.title}</p>
        </LinkWrap>
        <div className="absolute w-0 border-b-2 border-b-white opacity-0 duration-300 group-hover/level1:w-full group-hover/level1:opacity-100"></div>
      </div>
      {item.children?.length ? <IoIosArrowDown className="h-3 w-3 text-white" /> : null}
      {!!item.children?.length && (
        <div
          className={cn(
            "absolute top-full z-20",
            "border border-slate-200 bg-white text-black",
            { "invisible group-hover/level1:visible": !!item.children?.length },
            "opacity group-hover/level1:opacity-100",
          )}
        >
          {item.children?.map((data) => {
            return (
              <MenuItemLevel2
                item={data}
                key={data.id}
                parentMenu={item}
                pagePostSlug={pagePostSlug}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItemLevel1;
