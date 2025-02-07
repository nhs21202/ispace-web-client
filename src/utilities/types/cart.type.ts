import { BaseMedia } from "./media.type";
import { BaseProduct, ProductVariant } from "./product.type";
import { CustomerInfo } from "./user.type";

export type CartItem = {
  id: number;
  productId: BaseProduct["id"];
  productVariantId: ProductVariant["id"];
  customerId: CustomerInfo["id"];
  quantity: number;
  product?: BaseProduct;
  productVariant?: ProductVariant;
  originalPrice: number;
  lastPrice: number;
  totalLastPrice: number;
  featuredImage: BaseMedia;
};

export type CartInfo = {
  totalCartPrice: number;
  data: CartItem[];
};
