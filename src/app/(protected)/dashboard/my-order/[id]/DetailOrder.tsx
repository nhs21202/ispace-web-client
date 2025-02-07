"use client";

import { getDetailOrder } from "@/api/order/client";
import {
  ORDER_STATUS,
  OrderDetail,
  PAYMENT_STATUS,
} from "@/utilities/types/order.type";
import { Card, Spin, Button, Divider } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import OrderStatusLabel from "../OrderStatusLabel";
import PaymentStatusBadge from "../PaymentStatusBadge";
import { vndString } from "@/utilities/helper/string.helper";
import ModalEditAddress from "./ModalEditAddress";
import ModalReasonCancel from "./ModalReasonCancel";
import { cn } from "@/utilities/helper/common.helper";
import { formatDate } from "@/utilities/helper/time.helper";
import SummaryRow from "@/components/SummaryRow";
import Image from "next/image";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import useIsClient from "@/hooks/useIsClient";
import ModalPaymentInfo from "./ModalPaymentInfo";
import { PaymentMethodDetail } from "@/utilities/types/settings.type";

type Props = {
  orderId: number;
  banks?: PaymentMethodDetail[];
};

const OrderDetailPage = ({ orderId, banks }: Props) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [openModalPaymentInfo, setOpenModalPaymentInfo] = useState(false);
  const [orderDetail, setOrderDetail] = useState<OrderDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const isClient = useIsClient();

  const fetchDetailOrder = useCallback(async () => {
    setIsLoading(true);
    const data = await getDetailOrder(orderId);
    if (data) setOrderDetail(data);
    setIsLoading(false);
  }, [orderId]);

  useEffect(() => {
    fetchDetailOrder();
  }, [fetchDetailOrder]);

  const { deliveryInfo } = orderDetail || {};

  const generalInfo = [
    { label: "Mã đơn hàng", value: orderDetail?.code },
    {
      label: "Ngày tạo đơn hàng",
      value: formatDate(orderDetail?.createdAt, "DD/MM/YYYY HH:mm"),
    },
    {
      label: "Trạng thái thanh toán",
      value: <PaymentStatusBadge paymentStatus={deliveryInfo?.paymentStatus} />,
    },
    {
      label: "Trạng thái đơn hàng",
      value: <OrderStatusLabel orderStatus={orderDetail?.status} />,
    },
  ];

  const deliveryInfoList = [
    {
      label: "Họ và tên",
      value: deliveryInfo?.name,
    },
    {
      label: "Số điện thoại",
      value: deliveryInfo?.phone,
    },
    {
      label: "Địa chỉ",
      value: deliveryInfo?.address,
    },
    {
      label: "Ghi chú",
      value: deliveryInfo?.note,
    },
  ];

  if (!isClient) return null;

  return (
    <div className="mx-3 py-3">
      <Spin spinning={isLoading} size="large">
        <div className="grid gap-3 lg:grid-cols-2">
          <Card
            size="small"
            title="Thông tin đơn hàng"
            classNames={{ body: "grid gap-1" }}
            extra={
              <Button
                type="link"
                className={cn({
                  hidden: deliveryInfo?.paymentStatus !== PAYMENT_STATUS.PAID,
                })}
                onClick={() => setOpenModalPaymentInfo(true)}
              >
                Thông tin thanh toán
              </Button>
            }
          >
            {generalInfo.map((item) => (
              <div className="flex gap-3" key={item.label}>
                <span>{item.label}: </span>
                {item.value}
              </div>
            ))}
          </Card>

          <Card
            title="Địa chỉ giao hàng"
            extra={
              <Button
                type="link"
                className={cn({
                  hidden:
                    orderDetail?.status !== ORDER_STATUS.NEW &&
                    orderDetail?.status !== ORDER_STATUS.PROCESSING,
                })}
                onClick={() => setIsEditModalOpen(true)}
              >
                Sửa thông tin
              </Button>
            }
            classNames={{ body: "grid gap-1" }}
            size="small"
          >
            {deliveryInfoList.map((item) => (
              <div className="flex gap-3" key={item.label}>
                <span>{item.label}: </span>
                {item.value}
              </div>
            ))}
          </Card>

          <Card
            className="lg:col-span-2"
            classNames={{ body: "grid gap-1" }}
            size="small"
            title="Danh sách sản phẩm"
          >
            <div>
              {orderDetail?.orderDetails?.map((item) => (
                <SummaryRow
                  key={item.id}
                  className="mb-3 px-3 py-1"
                  label={
                    <div className="flex gap-3">
                      {item.product?.media?.src ? (
                        <Image
                          src={item.product?.media?.src}
                          className="h-16 w-16 rounded-lg border border-slate-300 object-cover"
                          width={80}
                          height={80}
                          alt="thumbnail-product"
                        />
                      ) : (
                        <BlockPlaceholder
                          className="h-16 w-16 rounded-lg border bg-slate-50"
                          text=""
                        />
                      )}
                      <div
                        title={item.product?.name}
                        className="text-slate-500"
                      >
                        <p className="text-base">{item.product?.name || "-"}</p>
                        {item.productVariant && (
                          <p className="text-xs italic">
                            Ghi chú: {item.productVariant?.name}
                          </p>
                        )}
                        <div className="flex items-center gap-3 text-xs">
                          <p>Số lượng:</p>
                          <p>{item.quantity || 0} sản phẩm</p>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          Đơn giá:
                          <p>{vndString(item.lastPrice)}</p>
                          {item.product?.onSale && (
                            <p className="mr-2 italic text-slate-300 line-through">
                              {vndString(item.price)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  }
                  value={vndString(item.lastPrice * item.quantity)}
                />
              ))}
            </div>
            <Divider className="!my-1 !border-slate-500" />
            <SummaryRow
              label="Tạm tính"
              value={vndString(orderDetail?.lastPrice)}
            />
            <SummaryRow label="VAT" value={vndString(0)} />
            <SummaryRow label="Phí vận chuyển" value={vndString(0)} />
            <Divider className="!my-1 !border-slate-500" />
            <SummaryRow
              label="Tổng cộng"
              value={vndString(orderDetail?.lastPrice)}
              className="font-semibold"
            />
          </Card>
        </div>
      </Spin>
      <Button
        onClick={() => setIsCancelModalOpen(true)}
        type="primary"
        danger
        className={cn("mt-5 w-full font-semibold", {
          hidden:
            orderDetail?.status === ORDER_STATUS.NEW ||
            orderDetail?.status === ORDER_STATUS.PROCESSING ||
            orderDetail?.status === ORDER_STATUS.CANCELLED,
        })}
      >
        HỦY ĐƠN HÀNG
      </Button>
      <ModalReasonCancel
        isOpen={isCancelModalOpen}
        orderId={orderId}
        onClose={() => setIsCancelModalOpen(false)}
        onSuccess={() => {
          fetchDetailOrder();
          setIsCancelModalOpen(false);
        }}
      />
      <ModalEditAddress
        isOpen={isEditModalOpen}
        orderDetail={orderDetail}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        onSuccess={() => {
          fetchDetailOrder();
          setIsEditModalOpen(false);
        }}
      />

      <ModalPaymentInfo
        isOpen={openModalPaymentInfo}
        banks={banks}
        onClose={() => {
          setOpenModalPaymentInfo(false);
        }}
      />
    </div>
  );
};

export default OrderDetailPage;
