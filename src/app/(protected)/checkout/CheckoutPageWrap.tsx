"use client";

import React, { useMemo, useState } from "react";
import { App, Form } from "antd";

import { get } from "lodash";
import { PaymentMethod } from "@/utilities/types/settings.type";
import { checkoutCart, CheckoutResponse } from "@/api/cart/client";
import { useCart } from "@/contexts/CartContext";
import CartList from "./CartList";
import DeliveryForm from "./DeliveryForm";
import ModalAddAddress from "./ModalAddAddress";
import { CustomerInfo } from "@/utilities/types/user.type";
import { getPaymentMethodLabelByKey } from "@/utilities/helper/string.helper";
import ModalSuccessCheckout from "./ModalSuccessCheckout";
import { useRouter } from "next/navigation";

type FormValues = {
  address: string;
  name: string;
  phone: string;
  paymentMethodId: number;
  note: string;
};

type Props = {
  paymentMethods?: PaymentMethod[];
};

const CheckoutPageWrap = ({ paymentMethods }: Props) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const { cartInfo, refreshCartInfo } = useCart();
  const { modal } = App.useApp();
  const router = useRouter();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [modalSuccessState, setModalSuccessState] = useState<{
    open: boolean;
    data?: CheckoutResponse;
  }>({ open: false });

  const paymentMethodOptions = useMemo(
    () =>
      paymentMethods?.map((paymentMethod: PaymentMethod) => ({
        value: paymentMethod.id,
        label: getPaymentMethodLabelByKey(paymentMethod.key),
      })),
    [paymentMethods],
  );

  const handleChangeAddress = (
    value: string | number,
    options:
      | { value?: string | number; raw?: CustomerInfo | undefined }
      | { value?: string | number; raw?: CustomerInfo | undefined }[]
      | undefined,
  ) => {
    const name = get(options, "raw.name");
    const phone = get(options, "raw.phone");
    const address = get(options, "raw.address");
    form.setFieldValue("address", address);
    form.setFieldValue("name", name);
    form.setFieldValue("phone", phone);
    if (value === "pickOther") {
      setIsAddModalVisible(true);
    }
  };

  const onCheckoutConfirm = async (values: FormValues) => {
    if (!cartInfo.data?.length) {
      message.error("Giỏ hàng trống!");
      return;
    }

    modal.confirm({
      title: "Xác nhận thanh toán",
      content: "Bạn có chắc chắn muốn thanh toán đơn hàng này?",
      okText: "Xác nhận",
      cancelText: "Hủy",
      onOk: async () => {
        const payload = {
          cartDetails: cartInfo.data?.map((item) => ({
            id: item.id,
            lastPrice: item.lastPrice,
          })),
          deliveryInfo: values,
        };
        const response = await checkoutCart(payload);

        if (response) {
          await refreshCartInfo?.()
          setModalSuccessState({ open: true, data: response });
          message.success("Thanh toán thành công!");
        } else {
          message.error("Thanh toán không thành công!");
        }
      },
    });
  };

  return (
    <div className="my-5">
      <Form
        layout="vertical"
        form={form}
        onFinish={onCheckoutConfirm}
        scrollToFirstError
      >
        <div className="container mx-auto mt-5 gap-8 px-3 lg:grid lg:grid-cols-3">
          <div className="w-full overflow-hidden lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold uppercase text-[#6D6A6A]">
              Thông tin khách hàng
            </h2>
            <DeliveryForm
              paymentMethodOptions={paymentMethodOptions}
              handleChangeAddress={handleChangeAddress}
            />
          </div>
          <div className="w-full lg:col-span-1">
            <CartList />
          </div>
        </div>
      </Form>

      <ModalAddAddress
        isOpen={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
      />

      <ModalSuccessCheckout
        isOpen={modalSuccessState.open}
        paymentMethods={paymentMethods}
        onClose={() => {
          setModalSuccessState({ open: false });
          router.push("/dashboard/order");
        }}
        orderInfo={modalSuccessState.data}
      />
    </div>
  );
};

export default CheckoutPageWrap;
