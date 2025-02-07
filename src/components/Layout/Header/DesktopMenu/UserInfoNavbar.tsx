"use client";

import { useAuth } from "@/contexts/AuthContext";
import { getNameSymbol } from "@/utilities/helper/string.helper";
import { Dropdown, Avatar, Button, Spin } from "antd";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa6";
import CartListDropdown from "./CartListDropdown";
import ModalAuth from "@/components/CommonModal/ModalAuth";
import { LanguageType, WebSettingsType } from "@/utilities/types/settings.type";
import { CustomerInfo } from "@/utilities/types/user.type";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { get } from "lodash";

type Props = {
  webInfos?: WebSettingsType | null;
  initUserInfo?: CustomerInfo;
};

const UserInfoNavbar = ({ webInfos }: Props) => {
  const {
    userInfo,
    isUserInfoInitd,
    onLogout,
    openModalAuth,
    setOpenModalAuth,
  } = useAuth();

  const menuItems = [
    {
      key: "account",
      label: <Link href="/dashboard/account">Thông tin tài khoản</Link>,
    },
    {
      key: "logout",
      label: userInfo?.name ? "Đăng xuất" : "Login",
      onClick: onLogout,
      danger: true,
    },
  ];

  const handleLogin = async () => {
    setOpenModalAuth?.(true);
  };

  const languagesSetting: LanguageType[] =
    Object.keys(webInfos?.LANGUAGE_SETTING || [])
      .filter((key) => !Number.isNaN(Number(key)))
      .map((key) => get(webInfos?.LANGUAGE_SETTING, key)) || [];

  return (
    <>
      <div className="flex flex-shrink-0 items-center divide-x-2 divide-slate-200">
        <div className="flex h-8 w-fit min-w-8 flex-shrink-0 items-center justify-center px-4">
          <LanguageSwitcher languages={languagesSetting} />
          {!isUserInfoInitd && <Spin spinning />}
          {isUserInfoInitd && !!userInfo && (
            <>
              <div className="px-4">
                <CartListDropdown />
              </div>
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Avatar
                  src={userInfo?.avatar?.thumbnailSrc || userInfo?.avatar?.src}
                  className="flex-shrink-0 cursor-pointer"
                >
                  {getNameSymbol(userInfo?.name || "")}
                </Avatar>
              </Dropdown>
            </>
          )}
          {isUserInfoInitd && !userInfo && (
            <Button
              type="text"
              className="flex cursor-pointer items-center gap-2 !px-1 outline-none"
              onClick={handleLogin}
            >
              <FaUser className="text-lg hover:cursor-pointer hover:text-primary" />
              <p>Đăng nhập</p>
            </Button>
          )}
        </div>
      </div>
      <ModalAuth
        open={openModalAuth}
        onClose={() => setOpenModalAuth(false)}
        onLoginSuccess={() => setOpenModalAuth(false)}
        webInfos={webInfos}
      />
    </>
  );
};

export default UserInfoNavbar;
