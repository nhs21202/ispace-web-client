import { BaseResponse } from "@/utilities/types/common.type";
import { serverApi } from "../serverApi";
import { MenuListItem } from "@/utilities/types/menu.type";

export const getMenu = async (): Promise<MenuListItem[]> => {
  try {
    const response =
      await serverApi<BaseResponse<MenuListItem[]>>("/client/menu");

    return response.data;
  } catch {
    return [];
  }
};
