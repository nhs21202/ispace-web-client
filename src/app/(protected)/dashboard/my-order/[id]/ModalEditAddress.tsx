"use client";

import { OrderDetail } from "@/utilities/types/order.type";
import { App, Form, Input, Modal, Select } from "antd";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { get } from "lodash";
import { CustomerInfo } from "@/utilities/types/user.type";
import { updateOrder } from "@/api/order/client";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import ModalAddAddress from "./ModalAddAddress";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";

type FormValues = {
  address: string;
  name: string;
  phone: string;
  note: string;
};

type Props = {
  isOpen: boolean;
  orderDetail?: OrderDetail;
  onClose: () => void;
  onSuccess?: () => void;
};

const ModalEditAddress = (props: Props) => {
  const { isOpen, orderDetail, onClose, onSuccess } = props;
  const [form] = Form.useForm<FormValues>();
  const { userInfo, refreshUserInfo } = useAuth();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { message } = App.useApp();

  const addressOptions = useMemo(() => {
    const list: { label: React.ReactNode; value: string | number }[] =
      userInfo?.customerAddresses?.map((address) => ({
        label: address?.address,
        value: address?.id,
        raw: address,
      })) || [];
    return list.concat([
      {
        label: <p className="font-bold text-blue-500">Thêm địa chỉ mới</p>,
        value: "pickOther",
      },
    ]);
  }, [userInfo?.customerAddresses]);

  const handleChangeAddress = (
    value: string | number,
    options:
      | { value?: string | number; raw?: CustomerInfo | undefined }
      | { value?: string | number; raw?: CustomerInfo | undefined }[]
      | undefined,
  ) => {
    const name = get(options, "raw.name");
    const phone = get(options, "raw.phone");
    form.setFieldValue("name", name);
    form.setFieldValue("phone", phone);
    if (value === "pickOther") {
      setIsAddModalOpen(true);
    }
  };

  const editOrder = async (values: FormValues) => {
    try {
      if (!orderDetail) return;

      await updateOrder(orderDetail.id, values);
      message.success("Cập nhật địa chỉ thành công!");
      if (onSuccess) {
        onSuccess();
      } else {
        onClose();
      }
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (isOpen && orderDetail) {
      form.setFieldsValue({
        address: orderDetail?.deliveryInfo?.address,
        name: orderDetail?.deliveryInfo?.name,
        phone: orderDetail?.deliveryInfo?.phone,
        note: orderDetail?.deliveryInfo?.note,
      });
    } else {
      form.resetFields();
    }
  }, [
    form,
    isOpen,
    orderDetail,
    orderDetail?.deliveryInfo?.address,
    orderDetail?.deliveryInfo?.name,
    orderDetail?.deliveryInfo?.phone,
  ]);

  const onSuccessNewAddress = (newAddress: {
    address: string;
    name: string;
    phone: string;
  }) => {
    form.setFieldValue("address", newAddress.address);
    form.setFieldValue("name", newAddress.name);
    form.setFieldValue("phone", newAddress.phone);
    setIsAddModalOpen(false);
    refreshUserInfo();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onOk={form.submit}
        onCancel={onClose}
        title="Sửa địa chỉ"
        forceRender
        modalRender={(dom) => (
          <Form layout="vertical" form={form} onFinish={editOrder}>
            {dom}
          </Form>
        )}
      >
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            className="col-span-2"
            name={"address"}
            label="Địa chỉ"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Chọn hoặc nhập địa chỉ mới"
              showSearch
              options={addressOptions}
              onChange={handleChangeAddress}
              size="large"
            />
          </Form.Item>
          <Form.Item
            name={"name"}
            label="Họ và tên"
            rules={[{ required: true, whitespace: true }]}
          >
            <Input placeholder="Họ và tên" size="large" />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Số điện thoại"
            rules={[
              { required: true },
              {
                pattern: PHONE_REGEX,
                message: "Số điện thoại không hợp lệ!",
              },
            ]}
          >
            <Input size="large" placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item name={"note"} label="Ghi chú" className="col-span-2">
            <Input.TextArea rows={4} placeholder="Nhập ghi chú" size="large" />
          </Form.Item>
        </div>
      </Modal>
      <ModalAddAddress
        isOpen={isAddModalOpen}
        addressList={userInfo?.customerAddresses || []}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={onSuccessNewAddress}
      />
    </>
  );
};

export default ModalEditAddress;
