"use client";

import React from "react";
import { Form, Input, Button, App } from "antd";
import { changePassword } from "@/api/auth/client";
import { getErrorMessage } from "@/utilities/helper/common.helper";

type FormValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PasswordPage = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();

  const onFinish = async (values: FormValues) => {
    try {
      const { currentPassword, newPassword } = values;
      await changePassword({ currentPassword, newPassword });
      message.success("Đổi mật khẩu thành công!");
      form.resetFields();
    } catch (error) {
      message.error(
        getErrorMessage(error) || "Có lỗi xảy ra, vui liệu thử lại sau!",
      );
    }
  };

  return (
    <div className="container mx-auto w-full rounded-xl border p-10">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item noStyle hidden name="username">
          <Input disabled autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu hiện tại"
          name="currentPassword"
          rules={[
            { required: true, whitespace: true },
            { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự" },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            placeholder="Nhập mật khẩu hiện tại"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            { required: true, whitespace: true },
            { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự" },
          ]}
        >
          <Input.Password
            autoComplete="new-password"
            placeholder="Nhập mật khẩu mới"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          dependencies={["newPassword"]}
          required
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không trùng khớp!"));
              },
            }),
          ]}
        >
          <Input.Password
            autoComplete="new-password"
            placeholder="Xác nhận mật khẩu"
            size="large"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Đổi mật khẩu
        </Button>
      </Form>
    </div>
  );
};

export default PasswordPage;
