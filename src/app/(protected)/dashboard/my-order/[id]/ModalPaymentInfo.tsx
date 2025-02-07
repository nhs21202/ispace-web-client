import BankList from "@/components/BankList";
import { PaymentMethodDetail } from "@/utilities/types/settings.type";
import { Modal } from "antd";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  banks?: PaymentMethodDetail[];
};

const ModalPaymentInfo = ({ isOpen, onClose, banks }: Props) => {
  return (
    <Modal
      title="Thông tin thanh toán"
      open={isOpen}
      onCancel={onClose}
      onClose={onClose}
      footer={null}
    >
      <BankList banks={banks} />
    </Modal>
  );
};

export default ModalPaymentInfo;
