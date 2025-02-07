"use client";

import React, { useState } from "react";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useIsClient from "@/hooks/useIsClient";

const DashboardSideBar = () => {
  const path = usePathname();
  const isClient = useIsClient();
  const getDefaultSelectedKey = () => {
    if (path?.startsWith("/dashboard/account")) {
      return "account-info";
    }
    if (path?.startsWith("/dashboard/my-order")) {
      return "order-management";
    }
    if (path?.startsWith("/dashboard/address")) {
      return "address-management";
    }
    if (path?.startsWith("/dashboard/password")) {
      return "change-password";
    }
    return "account-info";
  };

  const [activeMenu, setActiveMenu] = useState(getDefaultSelectedKey());

  if (!isClient) return null;

  const menuItems = [
    {
      key: "account-info",
      label: <Link href="/dashboard/account">Thông tin tài khoản</Link>,
    },
    {
      key: "order-management",
      label: <Link href="/dashboard/my-order">Quản lý đơn hàng</Link>,
    },
    {
      key: "address-management",
      label: <Link href="/dashboard/address">Quản lý địa chỉ</Link>,
    },
    {
      key: "change-password",
      label: <Link href="/dashboard/password">Đổi mật khẩu</Link>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: "#d3d3d3",
            itemSelectedColor: "#000",
            itemActiveBg: "#d3d3d3",
            activeBarBorderWidth: 0,
          },
        },
      }}
    >
      <div className="hidden w-full lg:block">
        <Menu
          mode={"inline"}
          selectedKeys={[activeMenu]}
          onSelect={(info) => setActiveMenu(info.key)}
          items={menuItems}
        />
      </div>
      <div className="lg:hidden">
        <Menu
          mode={"horizontal"}
          selectedKeys={[activeMenu]}
          onSelect={(info) => setActiveMenu(info.key)}
          items={menuItems}
        />
      </div>
    </ConfigProvider>
  );
};

export default DashboardSideBar;
