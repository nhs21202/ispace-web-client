import clientApi from "../clientApi";
import { CategoryListItem } from "@/utilities/types/category.type";
import { BaseResponse, ListResponse } from "@/utilities/types/common.type";

export const getClientCategories = async () => {
  try {
    const res =
      await clientApi.get<ListResponse<CategoryListItem>>("/client/categories");
    return res?.data || [];
  } catch {
    return { data: [], total: 0, pages: 0 };
  }
};

export const getClientCategoriesBySlug = async (slug: string) => {
  const res = await clientApi.get<BaseResponse<CategoryListItem>>(
    `/client/categories/${slug}`,
  );
  return res?.data?.data || null;
};
