import LinkWrap from "@/components/LinkWrap";
import { getLinkRefOfMenuItem } from "@/utilities/helper/menu.helper";
import { MENU_LINK_TYPE, MenuListItem } from "@/utilities/types/menu.type";
import React from "react";

type Props = {
  item: MenuListItem;
  parentMenu: MenuListItem;
  pagePostSlug?: string;
};

const MenuItemLevel3 = ({ item, parentMenu, pagePostSlug }: Props) => {
  const link = getLinkRefOfMenuItem({ item, pagePostSlug, parentMenu });

  return (
    <LinkWrap
      href={link}
      target={item.linkType === MENU_LINK_TYPE.EXTERNAL ? "_blank" : ""}
    >
      <div className="relative flex min-w-48 cursor-pointer items-center gap-2 bg-white p-3 text-black hover:bg-slate-100">
        <div className="relative">
          <p>{item.title}</p>
        </div>
      </div>
    </LinkWrap>
  );
};

export default MenuItemLevel3;
