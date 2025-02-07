import { ProductCategory } from "./category.type";
import { BaseMedia } from "./media.type";

export enum DISCOUNT_TYPE {
  PERCENT = "PERCENT",
  VALUE = "VALUE",
}

export type DiscountType = {
  id: number;
  name: string | null;
  status: number;
  value: number;
  valueType: DISCOUNT_TYPE;
};

export type BaseProduct = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  cost: number;
  onSale: number;
  status: number;
  discount: DiscountType;
  medias?: BaseMedia[];
  media?: BaseMedia;
  lastPrice: number;
  likeCount: number;
  shareLink: string;
};

export type ProductListItem = BaseProduct & {
  categories: ProductCategory[];
};

export type ProductOptionDetail = {
  id: number;
  value: string;
  productOptionId: ProductOption["id"];
};

export type ProductOption = {
  id: number;
  name: string;
  productId: BaseProduct["id"];
  productOptionDetails: ProductOptionDetail[];
};

export type ProductVariantOptionDetail = {
  id: number;
  productOptionDetailId: ProductOptionDetail["id"] | null;
  productVariantId: ProductVariant["id"];
  productOptionDetail: ProductOptionDetail | null;
};

export type ProductVariant = {
  id: number;
  name: string;
  status: number;
  sku: string;
  price: number;
  lastPrice?: number;
  productId: BaseProduct["id"];
  productVariantOptionDetails: ProductVariantOptionDetail[];
};

export type ProductDetail = BaseProduct & {
  categoryProducts: ProductCategory[];
  productOptions: ProductOption[];
  productVariants: ProductVariant[];
};
