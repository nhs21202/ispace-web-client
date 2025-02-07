import { FormDetail } from "@/utilities/types/form.type";
import { serverApi } from "../serverApi";
import { BaseResponse } from "@/utilities/types/common.type";

export const getFormByKey = async (key: string) => {
  try {
    const response = await serverApi<BaseResponse<FormDetail>>(
      `/client/forms/${key}`,
    );
    return response?.data || null;
  } catch {
    return null;
  }
};
