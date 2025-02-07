"use client";

import { App, Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { updatePassword } from "@/api/auth/client";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

type Props = {
  email: string;
  code: string;
};

const ResetPasswordForm = ({ email, code }: Props) => {
  const router = useRouter();
  const { message } = App.useApp();

  const onSubmit = async (values: FormValues) => {
    try {
      await updatePassword({ email, code, password: values.newPassword });
      message.success("Mật khẩu của bạn đã được đổi thành công.");
      router.push("/");
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item
        name="newPassword"
        label="Mật khẩu mới"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu mới" },
          { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
        ]}
      >
        <Input.Password placeholder="Mật khẩu mới" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Xác nhận mật khẩu"
        dependencies={["newPassword"]}
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Mật khẩu bạn nhập không trùng khớp!"),
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Nhập lại mật khẩu" />
      </Form.Item>
      <Button htmlType="submit" type="primary" className="mt-3" block>
        Lưu
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
