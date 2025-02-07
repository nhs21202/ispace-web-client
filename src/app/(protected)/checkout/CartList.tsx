import { useCart } from "@/contexts/CartContext";
import { Button, Divider, Empty } from "antd";
import React from "react";
import { vndString } from "@/utilities/helper/string.helper";
import SummaryRow from "@/components/SummaryRow";

const CartList = () => {
  const { cartInfo } = useCart();

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <h2 className="mb-4 text-xl font-semibold uppercase text-[#6D6A6A]">
        Chi tiết đơn hàng
      </h2>
      <div className="flex items-center justify-between gap-3 font-bold uppercase text-slate-500">
        <p>Sản phẩm</p>
        <p>Tổng cộng</p>
      </div>
      <Divider className="!my-2" />
      {cartInfo?.data.map((item) => (
        <SummaryRow
          key={item.id}
          className="mb-3"
          label={
            <div title={item.product?.name} className="text-slate-500">
              <p>
                {item.product?.name} x <b>{item.quantity}</b>
              </p>
              {item.productVariant && (
                <p className="text-xs italic">
                  Ghi chú: {item.productVariant?.name}
                </p>
              )}
            </div>
          }
          value={vndString(item.totalLastPrice)}
        />
      ))}
      {!cartInfo?.data?.length && (
        <Empty description="Không sản phẩm trong giỏ hàng" />
      )}

      <Divider className="!my-2" />

      <SummaryRow label="Tạm tính" value={vndString(cartInfo.totalCartPrice)} />
      <SummaryRow label="VAT" value={vndString(0)} />
      <SummaryRow label="Phí vận chuyển" value={vndString(0)} />

      <Divider />

      <SummaryRow
        label="Tổng cộng"
        value={vndString(cartInfo.totalCartPrice)}
        className="font-semibold"
      />
      <Button
        type="primary"
        className="mt-4 w-full"
        size="large"
        htmlType="submit"
        disabled={!cartInfo?.data?.length}
      >
        <p className="font-semibold uppercase">Đặt hàng</p>
      </Button>
    </div>
  );
};

export default CartList;
