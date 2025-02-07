import { createSearchParams } from "@/utilities/helper/common.helper";
import {
  BaseListPayload,
  BaseResponse,
  ListResponse,
} from "@/utilities/types/common.type";
import { ProductDetail, ProductListItem } from "@/utilities/types/product.type";
import clientApi from "../clientApi";

type ProductSearchParams = BaseListPayload & { categorySlug?: string };

export const getClientProductList = async (payload?: ProductSearchParams) => {
  try {
    const queryParams = createSearchParams(payload);

    const response = await clientApi.get<ListResponse<ProductListItem>>(
      `/client/products/?${queryParams.toString()}`,
    );
    return response.data;
  } catch {
    return { data: [], total: 0, pages: 0 };
  }
};

export const getClientProductDetailById = async (id: ProductDetail["id"]) => {
  try {
    const res = await clientApi.get<BaseResponse<ProductDetail>>(
      `/client/products/${id}`,
    );
    return res.data?.data || null;
  } catch {
    return null;
  }
};

export const getClientDetailProductBySlug = async (slug: string) => {
  try {
    const res = await clientApi.get<BaseResponse<ProductDetail>>(
      `/client/products/${slug}`,
    );
    return res?.data.data || null;
  } catch {
    return null;
  }
};
