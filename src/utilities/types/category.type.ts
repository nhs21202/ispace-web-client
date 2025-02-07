import { BASE_STATUS } from "./common.type";
import { BaseMedia } from "./media.type";
import { BaseProduct } from "./product.type";

export type BaseCategory = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  status: BASE_STATUS | null;
  parentId: BaseCategory['id'] | null;
};

export type CategoryListItem = BaseCategory & {
  media: BaseMedia | null;
  children: CategoryListItem[] | null;
  totalProductCount: number | null;
};

export type ProductCategory = {
  id: number;
  categoryId: BaseCategory['id'];
  productId: BaseProduct['id'];
  category: BaseCategory;
};
