import { BaseResponse } from "@/utilities/types/common.type";
import { WebSettingsType } from "@/utilities/types/settings.type";
import clientApi from "../clientApi";
import { serverApi } from "../serverApi";

export const getServerWebSettings = async () => {
  try {
    const res =
      await serverApi<BaseResponse<WebSettingsType>>("/client/settings");
    return res.data || null;
  } catch {
    return null;
  }
};

export const getClientWebSettings = async () => {
  try {
    const res =
      await clientApi.get<BaseResponse<WebSettingsType>>("/client/settings");
    return res.data.data || null;
  } catch {
    return null;
  }
};
