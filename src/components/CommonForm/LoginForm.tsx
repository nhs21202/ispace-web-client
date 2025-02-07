"use client";

import { App, Button, Form, Input } from "antd";
import React from "react";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { EMAIL_REGEX } from "@/utilities/constant/regex";
import { useAuth } from "@/contexts/AuthContext";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";

type FormValues = {
  key: string;
  password: string;
};
type Props = {
  onSuccess?: () => void;
};
const LoginForm = ({ onSuccess }: Props) => {
  const [form] = Form.useForm<FormValues>();
  const { onLogin } = useAuth();
  const { message } = App.useApp();

  const onFinish = async (values: FormValues) => {
    try {
      await onLogin(values);
      onSuccess?.();
    } catch (error) {
      const messageError = getErrorMessage(error);

      if (messageError === "User not found") {
        return form.setFields([{ name: "key", errors: [messageError] }]);
      }

      if (messageError === "Password is incorrect") {
        return form.setFields([{ name: "password", errors: [messageError] }]);
      }

      message.error(messageError || DEFAULT_ERROR_MESSAGE);
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
        name="key"
        required
        rules={[
          { required: true },
          {
            pattern: EMAIL_REGEX,
            message: "Email không đúng định dạng",
          },
        ]}
      >
        <Input
          placeholder="Nhập email của bạn"
          className="rounded border border-gray-300"
        />
      </Form.Item>
      <Form.Item
        required
        label="Mật khẩu"
        name="password"
        rules={[
          { required: true },
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
      <div className="my-2 text-right">
        <a
          href="/forgot-password"
          className="italic text-black hover:text-primary hover:underline"
        >
          Quên mật khẩu?
        </a>
      </div>
      <Button type="primary" htmlType="submit" className="w-full">
        Đăng nhập
      </Button>
    </Form>
  );
};

export default LoginForm;
