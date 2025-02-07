import { BASE_STATUS } from "./common.type";


export enum MENU_LINK_TYPE {
  PAGE = "PAGE",
  EXTERNAL = "EXTERNAL",
  POST = "POST",
  POST_LIST = "POST_LIST",
  SECTION = "SECTION",
}

export type BaseMenu = {
  id: number;
  title?: string;
  status?: BASE_STATUS;
  linkType?: MENU_LINK_TYPE;
  parentId?: BaseMenu["id"] | null;
  sort?: number | null;
  link?: string | null;
};

export type MenuListItem = BaseMenu & {
  children?: MenuListItem[];
};
