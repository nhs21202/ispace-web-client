import { OrderListItem } from "@/utilities/types/order.type";
import clientApi from "../clientApi";
import {
  BaseListPayload,
  BaseResponse,
  ListResponse,
} from "@/utilities/types/common.type";
import { createSearchParams } from "@/utilities/helper/common.helper";

export const getOrderList = async (payload?: BaseListPayload) => {
  try {
    const queryParams = createSearchParams(payload);
    const response = await clientApi.get<ListResponse<OrderListItem>>(
      `/client/orders/${payload ? "?" + queryParams.toString() : ""}`,
    );
    return response?.data;
  } catch {
    return { data: [], total: 0, pages: 0 };
  }
};

export const getDetailOrder = async (id: number) => {
  try {
    const response = await clientApi.get<BaseResponse<OrderListItem>>(
      `/client/orders/${id}`,
    );
    return response?.data?.data;
  } catch {
    return null;
  }
};

export const cancelOrder = (id: number, data?: { note?: string }) => {
  try {
    return clientApi.patch(`/client/orders/${id}/cancel`, data);
  } catch {
    return;
  }
};

export const updateOrder = (
  id: number,
  data: { address: string; name: string; phone: string },
) => {
  try {
    return clientApi.patch(`/client/orders/${id}`, data);
  } catch {
    return;
  }
};
