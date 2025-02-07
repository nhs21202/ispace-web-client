"use client";

import { Badge, Button, Popover, Spin } from "antd";
import React from "react";

import { IoCart } from "react-icons/io5";
import { getAccessToken } from "@/utilities/helper/common.helper";
import { useCart } from "@/contexts/CartContext";
import CartItemComponent from "@/components/CartItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CartListDropdown = () => {
  const path = usePathname();
  const { cartInfo, removeCartItem, loading } = useCart();
  const isLoggedIn = !!getAccessToken();

  const shouldShow = path !== "/cart" && path !== "/checkout";

  if (!shouldShow) {
    return (
      <Spin spinning={loading}>
        <Badge count={cartInfo.data?.length} size="small" className="ml-2">
          <IoCart className="text-2xl" />
        </Badge>
      </Spin>
    );
  }

  return (
    <Popover
      trigger={["hover"]}
      placement="bottomRight"
      content={
        <Spin spinning={loading}>
          <div className="grid gap-3">
            {!isLoggedIn && (
              <div className="p-4 text-center text-gray-600">
                Vui lòng đăng nhập để xem giỏ hàng
              </div>
            )}
            {isLoggedIn && cartInfo.data.length === 0 && (
              <div className="p-4 text-center text-gray-600">
                Giỏ hàng của bạn đang trống
              </div>
            )}

            {cartInfo.data.map((item) => (
              <CartItemComponent
                data={item}
                key={item.id}
                onRemove={() => removeCartItem(item.id)}
              />
            ))}

            {cartInfo.data.length > 0 && (
              <Link href="/cart">
                <Button type="primary" block>
                  ĐẾN GIỎ HÀNG
                </Button>
              </Link>
            )}
          </div>
        </Spin>
      }
    >
      <div className="mt-2 flex cursor-pointer items-center pb-2 duration-300">
        <Badge count={cartInfo.data?.length} size="small" className="ml-2">
          <IoCart className="text-2xl" />
        </Badge>
      </div>
    </Popover>
  );
};

export default CartListDropdown;
