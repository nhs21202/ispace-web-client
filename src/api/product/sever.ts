import { createSearchParams } from "@/utilities/helper/common.helper";
import {
  BaseListPayload,
  BaseResponse,
  ListResponse,
} from "@/utilities/types/common.type";
import { ProductDetail, ProductListItem } from "@/utilities/types/product.type";
import { serverApi } from "../serverApi";

type ProductSearchParams = BaseListPayload & { categorySlug?: string };

export const getServerProductList = async (
  payload?: ProductSearchParams,
  options?: RequestInit,
) => {
  try {
    const queryParams = createSearchParams(payload);

    const res = await serverApi<ListResponse<ProductListItem>>(
      `/client/products/?${queryParams.toString()}`,
      options,
    );
    return res;
  } catch {
    return { data: [], total: 0, pages: 0 };
  }
};

export const getServerProductDetailById = async (id: ProductDetail["id"]) => {
  try {
    const res = await serverApi<BaseResponse<ProductDetail>>(
      `/client/products/${id}`,
    );
    return res?.data || null;
  } catch {
    return null;
  }
};

export const getServerDetailProductBySlug = async (slug: string) => {
  try {
    const res = await serverApi<BaseResponse<ProductDetail>>(
      `/client/products/${slug}`,
    );
    return res?.data || null;
  } catch {
    return null;
  }
};
