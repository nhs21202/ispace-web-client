import { MetaData } from "./common.type";
import { BaseCustomer } from "./customer.type";
import { DiscountType, BaseProduct, ProductVariant } from "./product.type";
import { PaymentMethod } from "./settings.type";

export enum PAYMENT_STATUS {
  PAID = 1,
  UNPAID = 0,
}

export enum ORDER_STATUS {
  ALL = "ALL",
  NEW = "NEW",
  PROCESSING = "PROCESSING",
  IN_TRANSIT = "IN_TRANSIT",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export type DeliveryInfo = {
  id: number;
  address: string;
  name: string;
  phone: string;
  paymentMethodId: PaymentMethod["id"];
  note: string;
  paymentStatus: PAYMENT_STATUS;
};

export type OrderProductItem = {
  id: number;
  orderId: BaseOrder["id"];
  productId: BaseProduct["id"];
  productVariantId: ProductVariant["id"];
  quantity: number;
  price: number;
  lastPrice: number;
  discount: DiscountType;
  product: BaseProduct;
  productVariant: ProductVariant;
};

export type BaseOrder = MetaData & {
  id: number;
  code: string;
  customerId: BaseCustomer["id"];
  status: ORDER_STATUS;
  price: number;
  lastPrice: number;
  deliveryInfo: DeliveryInfo;
};

export type OrderListItem = BaseOrder & {
  orderDetails: OrderProductItem[];
  customer: BaseCustomer;
};

export type OrderDetail = BaseOrder & {
  orderDetails: OrderProductItem[];
  customer: BaseCustomer;
};

export type OrderHistory = MetaData & {
  id: number;
  orderId: BaseOrder["id"];
  status: ORDER_STATUS;
  paymentStatus: PAYMENT_STATUS;
  note: string | null;
  updatedByUserType: "CUSTOMER" | "ADMIN";
  updatedBy: BaseCustomer["id"];
};
