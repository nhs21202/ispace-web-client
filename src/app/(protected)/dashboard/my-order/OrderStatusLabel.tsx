import { ORDER_STATUS } from "@/utilities/types/order.type";
import React from "react";

type Props = {
  orderStatus?: ORDER_STATUS;
};

const OrderStatusLabel = ({ orderStatus }: Props) => {
  const getLabel = () => {
    switch (orderStatus) {
      case ORDER_STATUS.NEW:
        return { text: "Đang xác nhận", color: "text-slate-400" };
      case ORDER_STATUS.PROCESSING:
        return { text: "Đang xử lý", color: "text-blue-500" };
      case ORDER_STATUS.IN_TRANSIT:
        return { text: "Đang giao hàng", color: "text-yellow-600" };
      case ORDER_STATUS.COMPLETED:
        return { text: "Hoàn thành", color: "text-green-500" };
      case ORDER_STATUS.CANCELLED:
        return { text: "Đã hủy", color: "text-red-500" };
      default:
        return { text: "Không xác định", color: "text-gray-500" };
    }
  };

  const statusLabel = getLabel();

  return <p className={`${statusLabel.color}`}>{statusLabel.text}</p>;
};

export default OrderStatusLabel;
