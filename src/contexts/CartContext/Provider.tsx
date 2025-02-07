"use client";

import { getErrorMessage } from "@/utilities/helper/common.helper";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./context";
import { CartInfo } from "@/utilities/types/cart.type";
import {
  addProductToCart,
  deleteCartItems,
  getCart,
  updateCartItemAmount,
} from "@/api/cart/client";
import { App } from "antd";
import { useAuth } from "../AuthContext";

const initCartInfo = {
  totalCartPrice: 0,
  data: [],
};

const CartProvider = (props: PropsWithChildren) => {
  const { userInfo } = useAuth();
  const [cartInfo, setCartInfo] = useState<CartInfo>(initCartInfo);
  const [loading, setLoading] = useState(true);
  const { message } = App.useApp();

  const refreshCartInfo = useCallback(async () => {
    setLoading(true);
    if (!userInfo?.id) {
      setCartInfo(initCartInfo);
      setLoading(false);
      return;
    }

    const response = await getCart();
    if (response) {
      setCartInfo(response);
    }
    setLoading(false);
  }, [userInfo]);

  useEffect(() => {
    refreshCartInfo();
  }, [refreshCartInfo]);

  const addToCart = useCallback(
    async (payload: {
      productId: number;
      productVariantId?: number;
      quantity: number;
    }) => {
      try {
        const response = await addProductToCart(payload);
        await refreshCartInfo();
        return response;
      } catch (error) {
        message.error(
          getErrorMessage(error) || "Có lỗi xảy ra. Vui lòng thử lại sau!",
        );
      }
    },
    [message, refreshCartInfo],
  );

  const removeItem = useCallback(
    async (cartItemId: number) => {
      try {
        await deleteCartItems([cartItemId]);
        await refreshCartInfo();
      } catch (error) {
        message.error(
          getErrorMessage(error) || "Có lỗi xảy ra. Vui lòng thử lại sau!",
        );
      }
    },
    [message, refreshCartInfo],
  );

  const updateItemAmount = useCallback(
    async (cartItemId: number, quantity: number) => {
      try {
        await updateCartItemAmount(cartItemId, { quantity });

        await refreshCartInfo();
      } catch (error) {
        message.error(
          getErrorMessage(error) || "Có lỗi xảy ra. Vui lòng thử lại sau!",
        );
      }
    },
    [message, refreshCartInfo],
  );

  const value = useMemo(
    () => ({
      cartInfo,
      loading,
      addToCart,
      removeCartItem: removeItem,
      updateCartItemAmount: updateItemAmount,
      refreshCartInfo,
    }),
    [
      addToCart,
      cartInfo,
      loading,
      refreshCartInfo,
      removeItem,
      updateItemAmount,
    ],
  );

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
