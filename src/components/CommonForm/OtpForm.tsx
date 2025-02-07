"use client";

import { verifyOtp } from "@/api/auth/client";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { App, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  email: string;
};

const OtpForm = ({ email }: Props) => {
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const router = useRouter();

  const onSubmit = (values: { otp: string }) => {
    verifyOtp({ email, code: values.otp })
      .then(() => {
        const queryString = new URLSearchParams();
        queryString.set("email", email);
        queryString.set("code", values.otp);

        router.push(`/reset-password?${queryString.toString()}`);
      })
      .catch((error) => {
        message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
      });
  };

  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
      <div className="flex justify-center">
        <Form.Item
          name="otp"
          rules={[
            { required: true, message: "" },
            { len: 6, message: "" },
          ]}
        >
          <Input.OTP
            size="large"
            length={6}
            onInput={(value) => form.setFieldValue("otp", value.join(""))}
          />
        </Form.Item>
      </div>

      <Button htmlType="submit" type="primary" block>
        Xác minh
      </Button>
    </Form>
  );
};

export default OtpForm;
