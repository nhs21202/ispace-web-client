import { PageSection } from "@/utilities/types/pageSection.type";
import { serverApi } from "../serverApi";
import { BaseResponse } from "@/utilities/types/common.type";

export const getPageSectionBySlug = async (
  slug: string,
): Promise<PageSection[]> => {
  try {
    const res = await serverApi<BaseResponse<{ pageSections: PageSection[] }>>(
      `/client/page-sections/page/slug/${slug}`,
    );
    return res?.data?.pageSections ?? [];
  } catch {
    return [];
  }
};
