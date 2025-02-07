import { BASE_STATUS } from "./common.type";
import { BasePage, PageDetail } from "./page.type";
import { PageSection } from "./pageSection.type";
import { BasePost } from "./post.type";

export enum MENU_LINK_TYPE {
  PAGE = "PAGE",
  EXTERNAL = "EXTERNAL",
  POST = "POST",
  POST_LIST = "POST_LIST",
  SECTION = "SECTION",
}

export type BaseMenu = {
  id: number;
  title: string;
  status: BASE_STATUS;
  linkType: MENU_LINK_TYPE;
  parentId?: BaseMenu["id"] | null;
  pageId?: BasePage["id"] | null;
  pageSectionId?: PageSection["id"] | null;
  postId?: BasePost["id"] | null;
  postListTags?: string[] | null;
  sort?: number | null;
  link?: string | null;
  iconSrc?: string | null;
};

export type MenuListItem = BaseMenu & {
  page?: PageDetail;
  pageSection?: PageSection | null;
  post?: Pick<
    BasePost,
    "id" | "content" | "slug" | "summary" | "tags" | "title" | "status"
  > | null;
  children?: MenuListItem[];
};
