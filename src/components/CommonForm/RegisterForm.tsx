"use client";

import { signup } from "@/api/auth/client";
import { PHONE_REGEX } from "@/utilities/constant/regex";
import { GENDER } from "@/utilities/types/customer.type";
import { Button, Form, Input, message, Radio } from "antd";
import { AxiosError } from "axios";
import React from "react";

type FormValues = {
  email: string;
  password: string;
  name: string;
  phone: string;
  gender: GENDER;
  customerAddress: {
    address: string;
  };
};

type Props = {
  onSuccess?: () => void;
};

const RegisterForm = ({ onSuccess }: Props) => {
  const [form] = Form.useForm();

  const onFinish = async (values: FormValues) => {
    try {
      const response = await signup({
        ...values,
        customerAddress: {
          address: values.customerAddress.address,
          name: values.name,
          phone: values.phone,
        },
      });
      if (response) {
        message.success("Đăng ký tài khoản thành công");
        onSuccess?.();
        form.resetFields();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        message.error(error.response?.data?.error?.message);
      }
    }
  };
  return (
    <Form
      form={form}
      onFinish={onFinish}
      className="space-y-4"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Xin hãy nhập email của bạn!" },
          {
            type: "email",
            message: "Vui lòng nhập đúng định dạng email",
          },
        ]}
      >
        <Input
          placeholder="Nhập email"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          { required: true, message: "Xin hãy nhập mật khẩu!" },
          {
            min: 6,
            message: "Mật khẩu tối thiểu 6 kí tự",
          },
        ]}
      >
        <Input.Password
          placeholder="Nhập mật khẩu"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        required
        rules={[
          { required: true, message: "Xin hãy nhập số điện thoại!" },
          {
            pattern: PHONE_REGEX,
            message: "Số điện thoại không hợp lệ!",
          },
        ]}
      >
        <Input
          placeholder="Nhập số điện thoại"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item
        label="Họ tên"
        name="name"
        required
        rules={[
          { required: true, message: "Xin hãy nhập họ tên!" },
          { whitespace: true, message: "Không được nhập toàn khoảng trắng!" },
        ]}
      >
        <Input
          placeholder="Nhập họ và tên"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item
        label="Địa chỉ"
        name={["customerAddress", "address"]}
        required
        rules={[{ required: true, message: "Xin hãy nhập địa chỉ!" }]}
      >
        <Input
          placeholder="Nhập địa chỉ"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item name="gender" label="Giới tính" initialValue={GENDER.MALE}>
        <Radio.Group>
          <Radio value={GENDER.MALE}>Nam</Radio>
          <Radio value={GENDER.FEMALE}>Nữ </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="w-full" type="primary">
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
