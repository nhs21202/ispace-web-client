import { PAYMENT_STATUS } from "@/utilities/types/order.type";
import { Tag } from "antd";
import React from "react";

type Props = {
  paymentStatus?: PAYMENT_STATUS;
};

const PaymentStatusBadge = ({ paymentStatus }: Props) => {
  const getLabel = () => {
    switch (paymentStatus) {
      case PAYMENT_STATUS.PAID:
        return { text: "Đã thanh toán", color: "green" };
      case PAYMENT_STATUS.UNPAID:
        return { text: "Chưa thanh toán", color: "red" };
      default:
        return { text: "Không xác định", color: "gray" };
    }
  };
  const paymentLabel = getLabel();

  return <Tag color={paymentLabel.color}>{paymentLabel.text}</Tag>;
};

export default PaymentStatusBadge;
