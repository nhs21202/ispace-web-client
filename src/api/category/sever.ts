import { CategoryListItem } from "@/utilities/types/category.type";
import { BaseResponse, ListResponse } from "@/utilities/types/common.type";
import { serverApi } from "../serverApi";

export const getServerCategories = async () => {
  try {
    const res =
      await serverApi<ListResponse<CategoryListItem>>("/client/categories");
    return res || [];
  } catch {
    return { data: [], total: 0, pages: 0 };
  }
};

export const getServerCategoriesBySlug = async (slug: string) => {
  const res = await serverApi<BaseResponse<CategoryListItem>>(
    `/client/categories/${slug}`,
  );
  return res?.data || null;
};
