import {
  getPaymentMethodLabelByKey,
  vndString,
} from "@/utilities/helper/string.helper";
import { Button, Modal, Typography } from "antd";
import React from "react";
import BankList from "../../../components/BankList";
import { PaymentMethod } from "@/utilities/types/settings.type";
import Link from "next/link";
import { CheckoutResponse } from "@/api/cart/client";
import { cn } from "@/utilities/helper/common.helper";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  orderInfo?: CheckoutResponse;
  paymentMethods?: PaymentMethod[];
};

const ModalSuccessCheckout = ({
  isOpen,
  onClose,
  orderInfo,
  paymentMethods,
}: Props) => {
  const banks =
    paymentMethods?.find(
      (pm) => pm.id === orderInfo?.deliveryInfo?.paymentMethodId,
    )?.paymentMethodDetails || [];

  return (
    <Modal
      title="Đặt đơn thành công"
      open={isOpen}
      onCancel={onClose}
      onClose={onClose}
      maskClosable={false}
      closable={false}
      footer={null}
    >
      <div>
        <div className="flex flex-col gap-2 border-y py-4">
          <div className="flex gap-2">
            Mã đơn hàng:{" "}
            <Typography.Paragraph copyable className="!mb-0">
              {orderInfo?.code}
            </Typography.Paragraph>
          </div>
          <p>
            Tổng đơn hàng:{" "}
            <span className="font-bold">{vndString(orderInfo?.lastPrice)}</span>
          </p>
          <p>
            Phương thức thanh toán:{" "}
            {getPaymentMethodLabelByKey(
              paymentMethods?.find(
                (item) => item.id === orderInfo?.deliveryInfo?.paymentMethodId,
              )?.key,
            )}
          </p>
        </div>

        <div className={cn({ hidden: !banks.length })}>
          <BankList banks={banks} />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Link href={"/"}>
            <Button>Về trang chủ</Button>
          </Link>

          <Link href={`/dashboard/my-order/${orderInfo?.id}`}>
            <Button type="primary">Xem chi tiết đơn</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSuccessCheckout;
