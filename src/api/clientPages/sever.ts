import { BaseResponse } from "@/utilities/types/common.type";
import { serverApi } from "../serverApi";
import { PageBriefInfo, PageDetail } from "@/utilities/types/page.type";

export const getPageByKey = async (key: string) => {
  try {
    const query = new URLSearchParams({ search: `key:=:${key}` });

    const response = await serverApi<BaseResponse<PageDetail[]>>(
      `/client/pages/?${query.toString()}`,
    );

    return response?.data?.[0] || null;
  } catch {
    return null;
  }
};

export const getPageByPath = async (url: string): Promise<PageBriefInfo | null> => {
  try {
    const response = await serverApi<BaseResponse<PageBriefInfo>>(
      `/client/pages/by-url?pathName=${url}`,
    );
    return response?.data || null;
  } catch {
    return null;
  }
};

export const getPageBySlug = async (slug: string) => {
  try {
    const response = await serverApi<BaseResponse<PageBriefInfo>>(
      `/client/pages/slug/${slug}`,
    );
    return response?.data || null;
  } catch {
    return null;
  }
};
