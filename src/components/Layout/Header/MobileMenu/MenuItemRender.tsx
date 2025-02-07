import { cn } from "@/utilities/helper/common.helper";
import { getLinkRefOfMenuItem } from "@/utilities/helper/menu.helper";
import { MenuListItem } from "@/utilities/types/menu.type";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  menu: MenuListItem;
  pagePostSlug?: string;
  parentMenu?: MenuListItem;
  onExpand?: (menuId: number) => void;
  isExpanded?: boolean;
  className?: string;
  wrapClassName?: string;
  onSelect?: () => void;
};

const MenuItemRender = ({
  isExpanded,
  menu,
  pagePostSlug,
  parentMenu,
  onExpand,
  className,
  wrapClassName,
  onSelect,
}: Props) => {
  const link = getLinkRefOfMenuItem({ item: menu, parentMenu, pagePostSlug });

  return (
    <div className={cn("flex items-center justify-between", wrapClassName)}>
      <div className="relative">
        {link ? (
          <Link href={link}>
            <p className={className} onClick={onSelect}>
              {menu.title}
            </p>
          </Link>
        ) : (
          <p className={className} onClick={onSelect}>
            {menu.title}
          </p>
        )}
        <div className="absolute w-0 border-b-2 border-b-white opacity-0 duration-300 group-hover/level1:w-full group-hover/level1:opacity-100"></div>
      </div>
      {menu.children?.length ? (
        <button
          className={cn("rounded-full border-2 border-transparent p-1 duration-200 hover:border-slate-400", {
            "rotate-180": isExpanded,
          })}
          onClick={() => onExpand?.(menu.id)}
        >
          <IoIosArrowDown className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
};

export default MenuItemRender;
