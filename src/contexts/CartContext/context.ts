import { CartInfo } from "@/utilities/types/cart.type";
import { createContext } from "react";

export type CartContextType = {
  loading: boolean;
  cartInfo: CartInfo;
  addToCart: (product: {
    productId: number;
    productVariantId?: number;
    quantity: number;
  }) => void;
  removeCartItem: (cartItemId: number) => void;
  updateCartItemAmount: (cartItemId: number, amount: number) => void;
  refreshCartInfo?: () => Promise<void>;
};

export const CartContext = createContext<CartContextType>({
  loading: false,
  cartInfo: { data: [], totalCartPrice: 0 },
  addToCart: () => {},
  removeCartItem: () => {},
  updateCartItemAmount: () => {},
  refreshCartInfo: () => Promise.resolve(),
});
