"use client";

import { getNameSymbol } from "@/utilities/helper/string.helper";
import { Dropdown, Avatar, Button, Spin } from "antd";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { LanguageType, WebSettingsType } from "@/utilities/types/settings.type";
import { CustomerInfo } from "@/utilities/types/user.type";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { get } from "lodash";

type Props = {
  webInfos?: WebSettingsType | null;
  initUserInfo?: CustomerInfo;
};

const UserInfoNavbar = ({ webInfos }: Props) => {
  const languagesSetting: LanguageType[] =
    Object.keys(webInfos?.LANGUAGE_SETTING || [])
      .filter((key) => !Number.isNaN(Number(key)))
      .map((key) => get(webInfos?.LANGUAGE_SETTING, key)) || [];

  return (
    <>
      <div className="flex flex-shrink-0 items-center divide-x-2 divide-slate-200">
        <div className="flex h-8 w-fit min-w-8 flex-shrink-0 items-center justify-center px-4">
          <LanguageSwitcher languages={languagesSetting} />
        </div>
      </div>
    </>
  );
};

export default UserInfoNavbar;
