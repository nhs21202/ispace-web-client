"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";

const AntdConfig = ({ children }: PropsWithChildren) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={
          {
            // TODO [config] custom theme and token for antd components
          }
        }
        form={{
          validateMessages: {
            required: "Không được trống!",
            whitespace: "Không nhập toàn khoảng trắng",
          },
        }}
      >
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default AntdConfig;
