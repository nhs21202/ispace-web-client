"use client";

import { LanguageType } from "@/utilities/types/settings.type";
import { Dropdown } from "antd";
import Image from "next/image";
import Cookies from "js-cookie";

import React, { useEffect, useMemo, useState } from "react";
import { LANGUAGE } from "@/utilities/constant/storage";

type Props = {
  languages: LanguageType[];
};

const LanguageSwitcher = ({ languages }: Props) => {
  const [activeLanguage, setActiveLanguage] =
    useState<LanguageType["longCode"]>();

  useEffect(() => {
    const lang = Cookies.get(LANGUAGE);
    if (lang) {
      setActiveLanguage(lang);
      Cookies.set(LANGUAGE, lang);
    } else {
      const defaultLang = languages.find((lang) => lang.isDefault);
      const lang = defaultLang?.longCode ?? languages?.[0]?.longCode;
      setActiveLanguage(lang);
      Cookies.set(LANGUAGE, lang);
    }
  }, [languages]);

  const onLanguageChange = (longCode: LanguageType["longCode"]) => {
    if (longCode === activeLanguage) return;

    setActiveLanguage(longCode);
    Cookies.set(LANGUAGE, longCode);
    window.location.reload();
  };

  const menuItems = languages.map((lang) => ({
    key: lang.longCode,
    label: lang.name,
    icon: (
      <Image
        src={lang?.media?.src || ""}
        alt={lang?.name || ""}
        width={20}
        height={20}
      />
    ),
    onClick: () => {
      onLanguageChange(lang.longCode);
    },
  }));

  const selectedLanguage = useMemo(() => {
    return languages.find((lang) => lang.longCode === activeLanguage);
  }, [activeLanguage, languages]);

  return (
    <div className="mx-3">
      <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
        <div>
          {selectedLanguage?.media?.src ? (
            <Image
              src={selectedLanguage?.media?.src}
              alt={selectedLanguage?.name}
              width={20}
              height={20}
              className="h-6 w-8 rounded border object-cover"
            />
          ) : (
            selectedLanguage?.name
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
