import { updateUserMe } from "@/api/auth/client";
import { useAuth } from "@/contexts/AuthContext";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { Modal, Form, Input, App } from "antd";
import React, { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  address: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalAddAddress = ({ isOpen, onClose }: Props) => {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState<boolean>(false);
  const { userInfo, refreshUserInfo } = useAuth();
  const addressList = userInfo?.customerAddresses || [];

  const handleAddSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const newAddress = {
        name: values.name.trim(),
        address: values.address.trim(),
        phone: values.phone.trim(),
      };
      const customerAddresses = [...addressList, newAddress];
      await updateUserMe({ customerAddresses });
      message.success("Đã thêm địa chỉ thành công");
      await refreshUserInfo();
      form.resetFields();
      setLoading(false);
      onClose();
    } catch (error) {
      message.error(
        getErrorMessage(error) || `Có lỗi xảy ra, vui lòng thử lại sau.`,
      );
    }
  };

  return (
    <Modal
      title="Thêm địa chỉ mới"
      open={isOpen}
      onOk={() => form.submit()}
      onCancel={onClose}
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

export default ModalAddAddress;
