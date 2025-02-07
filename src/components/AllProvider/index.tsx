"use client";

import React, { PropsWithChildren } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import dayjs from "dayjs";
import timezonePlugin from "dayjs/plugin/timezone";
import utcPlugin from "dayjs/plugin/utc";
import AntdConfig from "../AntdConfig";
import { CartProvider } from "@/contexts/CartContext";

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

const AllProvider = ({ children }: PropsWithChildren) => {
  return (
    <AntdConfig>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </AntdConfig>
  );
};

export default AllProvider;
