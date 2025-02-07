import { CartItem } from "@/utilities/types/cart.type";
import clientApi from "../clientApi";
import {
  BaseOrder,
  DeliveryInfo,
  OrderProductItem,
} from "@/utilities/types/order.type";
import { BaseCustomer } from "@/utilities/types/customer.type";
import { BaseResponse } from "@/utilities/types/common.type";

export const addProductToCart = async (data: {
  productId: number;
  productVariantId?: number;
  quantity: number;
}) => {
  await clientApi.post("/client/customers/carts", data);
};

export const getCart = async () => {
  try {
    const response = await clientApi.get<{
      data: CartItem[];
      totalCartPrice: number;
    }>("/client/customers/carts");
    return response.data;
  } catch {
    return;
  }
};

export const updateCartItemAmount = async (
  cartItemId: number,
  data: { quantity: number },
) => {
  await clientApi.patch(`/client/customers/carts/${cartItemId}`, data);
};

export const deleteCartItems = async (ids: number[]) => {
  await clientApi.delete(`/client/customers/carts`, {
    data: { cartIdList: ids },
  });
};

type CartDetail = {
  id: number;
  lastPrice: number;
};

type Payload = {
  cartDetails: CartDetail[];
  deliveryInfo: Pick<
    DeliveryInfo,
    "address" | "name" | "phone" | "paymentMethodId" | "note"
  >;
};

export type CheckoutResponse = BaseOrder & {
  orderDetails: OrderProductItem[];
  customerId: BaseCustomer["id"];
};

export const checkoutCart = async (payload: Payload) => {
  try {
    const response = await clientApi.post<BaseResponse<CheckoutResponse>>(
      "/client/customers/carts/checkout",
      payload,
    );
    return response.data?.data;
  } catch {
    return;
  }
};
