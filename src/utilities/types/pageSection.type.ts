import { BaseCategory } from "./category.type";
import { BASE_STATUS } from "./common.type";
import { BaseMedia } from "./media.type";
import { BaseProduct, DiscountType } from "./product.type";

type PsaValue = {
  psaValueId: number;
  value: string | null;
  valueObject: object | null;
};

export type PageSection = {
  id: number;
  key: string;
  title: string;
  status: number;
  section: {
    id: number;
    title: string;
    type: string | null;
    status: number;
    key: null;
  };
  psaValueExpected: Record<string, PsaValue>;
};

export type TextImagePSA = {
  text: { valueObject: { content: string; display: boolean } };
  image: { value: string };
  button: { valueObject: { display: boolean; pageId: number; title: string } };
};

export type PostDataSection = {
  sectionTitle?: string;
  titleHref?: string;
  tags?: string;
  maxDisplayed?: number;
  type?: "auto" | "manual";
  sortBy?: "createdAt" | "updatedAt";
  posts?:
    | {
        title: string;
        subTitle?: string;
        mediaUrl: string;
        writeDate: string;
        link?: string;
      }[]
    | null;
};

export type ProductSectionItemData = {
  id: number;
  name: string;
  originPrice: number;
  finalPrice: number;
  discount: DiscountType | null;
  medias: BaseMedia[];
  categories?: BaseCategory[];
  href: string;
  sku?: string;
  description?: string;
  status: BASE_STATUS;
};

export type ProductSectionData = {
  sectionTitle?: string;
  titleHref?: string;
  categoryValue?: string;
  maxDisplayed?: number;
  type?: "auto" | "manual";
  sortBy?: "createdAt" | "updatedAt";
  items?: ProductSectionItemData[];
};

export type ProductSectionListItem = (BaseProduct & {
  categories?: BaseCategory[];
})[];
