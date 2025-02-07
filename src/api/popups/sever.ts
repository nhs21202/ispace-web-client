import { BaseResponse } from "@/utilities/types/common.type";
import { serverApi } from "../serverApi";
import { Popup } from "@/utilities/types/popups.type";

export const getActivePopups = async (options?: RequestInit) => {
  try {
    const res = await serverApi<BaseResponse<Popup>>("/client/popups/active", options);
    return res?.data || null;
  } catch {
    return null;
  }
};
