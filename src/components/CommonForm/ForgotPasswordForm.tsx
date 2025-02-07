"use client";

import { forgotPassword } from "@/api/auth/client";
import { EMAIL_REGEX } from "@/utilities/constant/regex";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { App, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgotPasswordForm = () => {
  const { message } = App.useApp();
  const router = useRouter();

  const onFinish = (values: { email: string }) => {
    forgotPassword(values)
      .then(() => {
        router.push(`/verify-otp?email=${values.email}`);
      })
      .catch((error) => {
        message.error(
          getErrorMessage(error) || "Đã có lỗi xảy ra, vui lòng thử lại sau!.",
        );
      });
  };
  return (
    <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
      <Form.Item
        className="mb-10"
        name="email"
        rules={[
          { required: true },
          { pattern: EMAIL_REGEX, message: "Định dạng email không đúng!" },
        ]}
      >
        <Input placeholder="Nhập email tài khoản của bạn" className="w-full" />
      </Form.Item>
      <Button htmlType="submit" type="primary" block>
        Gửi mã
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
