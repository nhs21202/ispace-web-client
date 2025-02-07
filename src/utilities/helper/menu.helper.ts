import { DEFAULT_POST_TAG, SLUG_POST_DEFAULT } from "../constant";
import { MENU_LINK_TYPE, MenuListItem } from "../types/menu.type";

export const convertMenu = (menu: MenuListItem[]) => {
  return (menu ?? []).map((item) => {
    const data = {
      key: item.id.toString(),
      label: item.title,
      href: "",
    };
    if (item.linkType === MENU_LINK_TYPE.PAGE && item?.page?.slug) {
      data.href = `/${item?.page?.slug}`;
    }
    if (item.linkType === MENU_LINK_TYPE.POST) {
      data.href = `/${item.post?.slug}`;
    }

    return data;
  });
};

export const getLinkRefOfMenuItem = ({
  item,
  parentMenu,
  pagePostSlug = SLUG_POST_DEFAULT,
}: {
  item: MenuListItem;
  parentMenu?: MenuListItem;
  pagePostSlug?: string;
}) => {
  let link = "";
  if (item.linkType === MENU_LINK_TYPE.PAGE) {
    link = `/${item?.page?.slug}`;
  }

  if (item.linkType === MENU_LINK_TYPE.SECTION) {
    link = `/${parentMenu?.page?.slug}/#${item?.pageSection?.key}`;
  }

  if (item.linkType === MENU_LINK_TYPE.POST_LIST) {
    link = `/${pagePostSlug}/${item.postListTags?.[0] || ""}`;
  }

  if (item.linkType === MENU_LINK_TYPE.EXTERNAL) {
    link = item.link || "";
  }

  if (item.linkType === MENU_LINK_TYPE.POST) {
    link = `/${pagePostSlug}/${item.post?.tags?.[0] || DEFAULT_POST_TAG}/${item.post?.slug}`;
  }

  return link;
};

export const flatMapMenuIds = (menu: MenuListItem[]): number[] => {
  return menu.flatMap((item) => {
    const parentIds = [item.id];
    const childIds = flatMapMenuIds(item.children || []) || [];
    return parentIds.concat(childIds);
  });
};
