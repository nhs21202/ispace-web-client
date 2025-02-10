"use client"
import { EMAIL_REGEX, PHONE_REGEX } from "@/utilities/constant/regex";
import { App, Form, Input, Select } from "antd";
import React from "react";

type FormValues = {
  name: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  centers: string;
};

const FormRegister = () => {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = async (values: FormValues) => {
    try {
      message.success("Register successfully");
      console.log("form values", values);
      form.resetFields();
    } catch (error) {
      message.error(`Đăng ký thất bại: ${error}`);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">Tư vấn lộ trình học và ưu đãi</h2> 
      <p className = "text-base font-bold mb-5">Bạn vui lòng điền số điện thoại để nhận tư vấn chương trình này</p>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true }, { whitespace: true }]}
        >
          <Input placeholder="Nhập họ tên bạn" size="large" />
        </Form.Item>
        <div className ="flex gap-5 w-full">
          <Form.Item
          className="w-1/2"
            name="email"
            rules={[
              { required: true },
              {
                pattern: EMAIL_REGEX,
                message: "Email không hợp lệ",
              },
            ]}
          >
            <Input placeholder="Nhập email" size="large" />
          </Form.Item>
          <Form.Item
                    className="w-1/2"

            name="phone"
            rules={[
              { required: true },
              {
                pattern: PHONE_REGEX,
                message: "Số diện thoại không hợp lệ",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" size="large" />
          </Form.Item>
        </div>
        <Form.Item
          name="childName"
          rules={[{ required: true }, { whitespace: true }]}
        >
          <Input placeholder="Nhập họ tên con" size="large" />
        </Form.Item>
        <div className="flex w-full gap-5">
          <Form.Item
                    className="w-1/2"

            name="class"
            rules={[{ required: true }, { whitespace: true }]}
          >
            <Input placeholder="Nhập lớp con học" size="large" />
          </Form.Item>
          <Form.Item
                    className="w-1/2"

            name="school"
            rules={[{ required: true }, { whitespace: true }]}
          >
            <Input placeholder="Nhập trường con học" size="large" />
          </Form.Item>
        </div>
        <Form.Item>
          <Select size = "large" placeholder = "Chọn cơ sở gần bạn" />
        </Form.Item>
        <button
  className="w-full p-2 bg-primary text-white font-bold text-lg rounded transition-transform duration-700 ease-in-out scale-100 animate-[transform_1.5s_infinite_alternate]"
  type="submit"
>
  GIỮ CHỖ NGAY
</button>

        <p className = "text-xs text-center mt-5  font-bold">* Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm (trong vòng 24h)

</p>
      </Form>
    </div>
  );
};

export default FormRegister;
