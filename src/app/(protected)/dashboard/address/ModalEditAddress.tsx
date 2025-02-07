import { updateUserMe } from "@/api/auth/client";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { CustomerAddress } from "@/utilities/types/customer.type";
import { Modal, Form, Input, App } from "antd";
import React, { useEffect, useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  address: string;
};

type Props = {
  isOpen: boolean;
  addressList: CustomerAddress[];
  selectedAddress: CustomerAddress | undefined;
  onClose: () => void;
  onSuccess: () => void;
};

const ModalEditAddress = ({
  isOpen,
  addressList,
  selectedAddress,
  onClose,
  onSuccess,
}: Props) => {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const { message } = App.useApp();

  useEffect(() => {
    if (selectedAddress && isOpen) {
      form.setFieldsValue(selectedAddress);
    }
  }, [selectedAddress, form, isOpen]);

  const onFinish = async (values: FormValues) => {
    try {
      setLoading(true);
      const customerAddresses = addressList.map((address) =>
        address.id === selectedAddress?.id
          ? { ...address, ...values }
          : address,
      );
      await updateUserMe({ customerAddresses });

      message.success("Sửa địa chỉ thành công");
      onSuccess();
      form.resetFields();
      setLoading(false);
      onClose();
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    }
  };
  return (
    <Modal
      title="Chỉnh sửa địa chỉ"
      open={isOpen}
      onOk={form.submit}
      onCancel={onClose}
      okText="Cập nhật"
      cancelText="Hủy"
      confirmLoading={loading}
      modalRender={(dom) => (
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {dom}
        </Form>
      )}
    >
      <Form.Item
        name="name"
        label="Họ và Tên"
        rules={[{ required: true, whitespace: true }]}
      >
        <Input placeholder="Nhập họ và tên" />
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
        rules={[{ required: true, whitespace: true }]}
      >
        <Input placeholder="Nhập địa chỉ" />
      </Form.Item>
    </Modal>
  );
};

export default ModalEditAddress;
