"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { App, Button, Divider, Grid, Modal, Spin, Table } from "antd";
import { useCart } from "@/contexts/CartContext";
import { getAccessToken } from "@/utilities/helper/common.helper";
import { useRouter } from "next/navigation";
import { BASE_STATUS } from "@/utilities/types/common.type";
import { vndString } from "@/utilities/helper/string.helper";
import { debounce } from "lodash";
import { getDesktopColumns, getMobileColumns } from "./column";
import SummaryRow from "@/components/SummaryRow";

const CartPage = () => {
  const {
    cartInfo,
    removeCartItem,
    updateCartItemAmount,
    loading: loadingCart,
  } = useCart();

  const router = useRouter();
  const { message, modal } = App.useApp();
  const [loading, setLoading] = useState(false);
  const grid = Grid.useBreakpoint();

  useEffect(() => {
    if (!getAccessToken()) {
      Modal.confirm({
        title: "Thông báo",
        content: "Vui lòng đăng nhập để sử dụng giỏ hàng!",
        okText: "Đăng nhập",
        cancelText: "Hủy",
        onOk: () => {
          router.push("/");
        },
      });
    }
  }, [router]);

  const handleCheckout = () => {
    if (cartInfo.data.length > 0) {
      router.push("/checkout");
    } else {
      Modal.confirm({
        title: "Không thể thanh toán",
        content: "Vui lòng thêm sản phẩm vào giỏ hàng để thực hiện thanh toán!",
        okText: "Đóng",
        cancelText: "Hủy",
        onOk: () => {
          router.push("/product");
        },
      });
    }
  };

  const handleRemoveItem = useCallback(
    (id: number) => {
      modal.confirm({
        title: "Xác nhận xóa",
        content: "Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?",
        okText: "Xóa",
        cancelText: "Hủy",
        okButtonProps: { danger: true, type: "primary" },
        onOk: async () => {
          setLoading(true);
          await removeCartItem(id);
          message.success("Xóa sản phẩm thành công");
          setLoading(false);
        },
      });
    },
    [message, modal, removeCartItem],
  );

  const updateAmount = useMemo(
    () => debounce(updateCartItemAmount, 500),
    [updateCartItemAmount],
  );

  const columns = useMemo(() => {
    if (grid.md)
      return getDesktopColumns({
        handleRemoveItem,
        updateAmount,
      });

    return getMobileColumns({
      handleRemoveItem,
      updateAmount,
    });
  }, [grid.md, handleRemoveItem, updateAmount]);

  return (
    <div className="container mx-auto mt-5 gap-8 px-3 lg:grid lg:grid-cols-3">
      <div className="w-full overflow-hidden lg:col-span-2">
        <h2 className="mb-4 text-xl font-semibold uppercase text-slate-500">
          Danh sách đơn hàng
        </h2>
        <Table
          pagination={false}
          dataSource={cartInfo.data}
          columns={columns}
          rowKey="id"
          className="w-full"
          scroll={grid.md ? { y: 500, x: 600 } : { y: 500 }}
          rowClassName={(record) =>
            record.product?.status === BASE_STATUS.INACTIVE
              ? "opacity-50 cursor-not-allowed"
              : ""
          }
          loading={loading}
          locale={{
            emptyText: loadingCart
              ? "Đang tải sản phẩm..."
              : "Không có sản phẩm trong giỏ hàng",
          }}
        />
      </div>
      <div className="w-full lg:col-span-1">
        <Spin spinning={loadingCart}>
          <h2 className="mb-4 text-xl font-semibold uppercase text-slate-500">
            Tổng đơn hàng
          </h2>
          <div className="space-y-4 rounded-lg border p-4">
            <SummaryRow
              label="Tạm tính"
              value={vndString(cartInfo.totalCartPrice)}
            />
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
              className="mt-4 w-full font-semibold uppercase"
              size="large"
              onClick={handleCheckout}
            >
              Thanh toán
            </Button>
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default CartPage;
