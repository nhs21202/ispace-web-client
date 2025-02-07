import { BASE_STATUS } from "./common.type";
import { PageSection } from "./pageSection.type";

export enum MetaDataType {
  LINK = "link",
  META = "meta",
}

export type PageMetadata = {
  key: string;
  value: string;
  type: MetaDataType;
};

export type BasePage = {
  id: number;
  key: string;
  metadata: PageMetadata[];
  link: string;
  title: string;
  slug: string;
  status: BASE_STATUS;
  pageSections: PageSection[];
  menuAmount: number;
};

export type PageBriefInfo = Pick<BasePage, "slug" | "status" | "key"> & {
  type: "PRODUCT" | "POST" | "STANDARD";
  tag?: string;
  tagName?: string;
  slugDetail?: string;
};

export type PageDetail = BasePage & {
  sort: number | null;
};
