import { MenuListItem } from "@/utilities/types/menu.type";
import React, { useState } from "react";
import MenuItemRender from "./MenuItemRender";
import { cn } from "@/utilities/helper/common.helper";

type Props = {
  menus?: MenuListItem[];
  pagePostSlug?: string;
  parentMenu?: MenuListItem;
  className?: string;
  level?: number;
  onSelectMenu?: (menuId: number) => void;
};

const MobileMenus = ({ menus, pagePostSlug, parentMenu, className, level = 0, onSelectMenu }: Props) => {
  const [expandedMenu, setExpandedMenu] = useState<number>();

  const handleExpand = (menuId: number) => {
    setExpandedMenu(expandedMenu === menuId ? undefined : menuId);
  };

  return (
    <div className={cn(className, "w-full", { hidden: !menus?.length })}>
      {menus?.map((item) => {
        return (
          <div key={item.id}>
            <MenuItemRender
              wrapClassName={cn("pr-5", {
                "pl-10": level === 0,
                "pl-14": level === 1,
                "pl-20": level === 2,
                "pl-24": level >= 3,
              })}
              className={cn(
                "cursor-pointer hover:text-neutral-400",
                { "text-bold pt-3 text-lg font-bold uppercase italic": level === 0 },
                { "py-[6px] font-normal": level >= 1 },
              )}
              menu={item}
              pagePostSlug={pagePostSlug}
              parentMenu={parentMenu}
              onSelect={() => onSelectMenu?.(item.id)}
              onExpand={() => handleExpand(item.id)}
              isExpanded={expandedMenu === item.id}
            />
            {item.id === expandedMenu && (
              <MobileMenus
                menus={item.children}
                level={level + 1}
                parentMenu={item}
                pagePostSlug={pagePostSlug}
                onSelectMenu={onSelectMenu}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileMenus;
