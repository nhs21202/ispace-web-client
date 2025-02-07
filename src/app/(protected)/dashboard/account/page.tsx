"use client";

import { Avatar, Button, Form, Input, Radio, Spin, Upload, App } from "antd";
import React, { useEffect, useState } from "react";
import { getErrorMessage } from "@/utilities/helper/common.helper";
import { EMAIL_REGEX, PHONE_REGEX } from "@/utilities/constant/regex";
import { uploadFile } from "@/api/file/client";
import { AiOutlineUpload } from "react-icons/ai";
import { useAuth } from "@/contexts/AuthContext";
import { GENDER } from "@/utilities/types/customer.type";
import { updateUserMe } from "@/api/auth/client";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";

type FormValues = {
  name?: string;
  phone?: string;
  email?: string;
  gender?: GENDER;
  avatar: {
    mediaId?: number;
  };
};

const AccountPage = () => {
  const [form] = Form.useForm<FormValues>();
  const { message } = App.useApp();
  const [avatarSrc, setAvatarSrc] = useState<string>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { userInfo, refreshUserInfo } = useAuth();

  useEffect(() => {
    form.setFieldsValue({
      name: userInfo?.name,
      phone: userInfo?.phone,
      email: userInfo?.email,
      gender: userInfo?.gender,
    });
    setAvatarSrc(userInfo?.avatar?.src);
  }, [form, userInfo]);

  const handleUploadAvatar = async (avatarFile: File) => {
    try {
      setIsUploading(true);
      const response = await uploadFile(avatarFile);
      const data = response.data;
      await updateUserMe({ avatar: { mediaId: data.data.id } });
      message.success("Thay ảnh đại diện thành công!");
      await refreshUserInfo();
      setIsUploading(false);
    } catch (error) {
      message.error(getErrorMessage(error));
    }
  };

  const handleFinish = async (values: FormValues) => {
    try {
      await updateUserMe(values);
      await refreshUserInfo();
      message.success("Cập nhật thông tin thành công!");
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <Form
      form={form}
      className="mx-10 w-full"
      layout="vertical"
      onFinish={handleFinish}
    >
      <Spin spinning={!userInfo}>
        <div className="mx-auto flex w-full gap-10 rounded-xl border p-10">
          <div className="flex flex-col items-center gap-5">
            <Avatar size={100} src={avatarSrc} alt="avatar" />
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                handleUploadAvatar(file);
                return false;
              }}
            >
              <Button
                type="primary"
                icon={<AiOutlineUpload />}
                loading={isUploading}
                disabled={isUploading}
              >
                Đổi ảnh đại diện
              </Button>
            </Upload>
          </div>
          <div className="w-full max-w-lg">
            <Form.Item
              label="Họ và tên"
              name="name"
              rules={[{ required: true, whitespace: true }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true },
                {
                  pattern: PHONE_REGEX,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true },
                {
                  pattern: EMAIL_REGEX,
                  message: "Vui lòng nhập đúng định dạng email",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value={GENDER.MALE}>Nam</Radio>
                <Radio value={GENDER.FEMALE}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
            <Button block type="primary" htmlType="submit">
              Lưu thông tin
            </Button>
          </div>
        </div>
      </Spin>
    </Form>
  );
};

export default AccountPage;
