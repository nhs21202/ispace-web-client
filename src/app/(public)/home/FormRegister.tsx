"use client";
import { EMAIL_REGEX, PHONE_REGEX } from "@/utilities/constant/regex";
import { App, Form, Input, Select } from "antd";
import { motion } from "framer-motion"; 
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
      message.success("Đăng ký thành công");
      console.log("form values", values);
      form.resetFields();
    } catch (error) {
      message.error(`Đăng ký thất bại: ${error}`);
    }
  };

  return (
    <div>
      <h2 className="mb-5 text-3xl font-bold">
        Tư vấn lộ trình học và ưu đãi
      </h2>
      <p className="mb-5 text-base font-bold">
        Bạn vui lòng điền số điện thoại để nhận tư vấn chương trình này
      </p>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" rules={[{ required: true }, { whitespace: true }]}>
          <Input placeholder="Nhập họ tên bạn" size="large" />
        </Form.Item>
        <div className="flex w-full gap-5">
          <Form.Item
            className="w-1/2"
            name="email"
            rules={[
              { required: true },
              { pattern: EMAIL_REGEX, message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Nhập email" size="large" />
          </Form.Item>
          <Form.Item
            className="w-1/2"
            name="phone"
            rules={[
              { required: true },
              { pattern: PHONE_REGEX, message: "Số điện thoại không hợp lệ" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" size="large" />
          </Form.Item>
        </div>
        <Form.Item name="childName" rules={[{ required: true }, { whitespace: true }]}>
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
          <Select size="large" placeholder="Chọn cơ sở gần bạn" />
        </Form.Item>

        <motion.button
          type="submit"
          className="w-full rounded bg-primary p-2 text-lg font-bold text-white"
          animate={{ scale: [1, 1.05, 1] }}  
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
        >
          GIỮ CHỖ NGAY
        </motion.button>

        <p className="mt-5 text-center text-xs font-bold">
          * Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm (trong vòng 24h)
        </p>
      </Form>
    </div>
  );
};

export default FormRegister;
