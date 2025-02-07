import { updateUserMe } from "@/api/auth/client";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { CustomerAddress } from "@/utilities/types/customer.type";
import { Modal, Form, Input, App } from "antd";
import React, { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  address: string;
};

type Props = {
  isOpen: boolean;
  addressList: CustomerAddress[];
  onClose: () => void;
  onSuccess: (newAddress: FormValues) => void;
};

const ModalAddAddress = ({
  isOpen,
  addressList,
  onClose,
  onSuccess,
}: Props) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const handleAddSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const updatedAddress = [...addressList, values];
      await updateUserMe({ customerAddresses: updatedAddress });
      message.success("Đã thêm địa chỉ thành công");
      onSuccess(values);
      form.resetFields();
      setLoading(false);
      onClose();
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <Modal
      title="Thêm địa chỉ mới"
      open={isOpen}
      onOk={form.submit}
      onCancel={onClose}
      onClose={onClose}
      okText="Thêm"
      cancelText="Hủy"
      confirmLoading={loading}
      modalRender={(dom) => (
        <Form form={form} layout="vertical" onFinish={handleAddSubmit}>
          {dom}
        </Form>
      )}
    >
      <Form.Item
        name="name"
        label="Họ và Tên"
        rules={[{ required: true, whitespace: true }]}
      >
        <Input placeholder="Nhập họ và tên" autoComplete="one-time-code" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Số điện thoại"
        rules={[
          { required: true },
          {
            pattern: PHONE_REGEX,
            message: "Số điện thoại không hợp lệ!",
          },
        ]}
      >
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Địa chỉ"
        rules={[{ required: true, whitespace: true }, {}]}
      >
        <Input placeholder="Nhập địa chỉ" />
      </Form.Item>
    </Modal>
  );
};

export default ModalAddAddress;
