import {
  CONTACT_ICON_KEY,
  CONTACT_ICON_POSITION,
  ContactIconType,
} from "@/utilities/types/settings.type";
import Link from "next/link";
import React from "react";
import ContactIcon from "./ContactIcon";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { getServerWebSettings } from "@/api/settings/sever";
import { BASE_STATUS } from "@/utilities/types/common.type";

const ContactIconsFloat = async () => {
  const settings = await getServerWebSettings();
  const contactIcons = settings?.PLUGIN_CONTACT_ICON || [];

  const getIconByKey = (key: CONTACT_ICON_KEY) => {
    switch (key) {
      case CONTACT_ICON_KEY.ICON_HOTLINE:
        return <FaPhone className="text-xl" />;
      case CONTACT_ICON_KEY.ICON_EMAIL:
        return <IoMdMail className="text-3xl" />;
      case CONTACT_ICON_KEY.ICON_ZALO:
        return <SiZalo className="text-3xl" />;
      case CONTACT_ICON_KEY.ICON_FACEBOOK:
        return <FaFacebookF className="mt-3 text-5xl" />;
      case CONTACT_ICON_KEY.ICON_MESSENGER:
        return <FaFacebookMessenger className="text-3xl" />;
      default:
        return null;
    }
  };
  const getTextByKey = ({ key, settings }: ContactIconType) => {
    switch (key) {
      case CONTACT_ICON_KEY.ICON_HOTLINE:
        return settings.phone;
      case CONTACT_ICON_KEY.ICON_EMAIL:
        return settings.email;
      case CONTACT_ICON_KEY.ICON_ZALO:
        return settings.phone;
      case CONTACT_ICON_KEY.ICON_FACEBOOK:
        return settings.link;
      case CONTACT_ICON_KEY.ICON_MESSENGER:
        return settings.link;
      default:
        return "";
    }
  };

  const getLink = ({ key, settings }: ContactIconType) => {
    switch (key) {
      case CONTACT_ICON_KEY.ICON_HOTLINE:
        return `tel:${settings.phone}`;
      case CONTACT_ICON_KEY.ICON_EMAIL:
        return `mailto:${settings.email || ""}`;
      case CONTACT_ICON_KEY.ICON_ZALO:
        return `https://zalo.me/${settings?.phone || ""}`;
      case CONTACT_ICON_KEY.ICON_FACEBOOK:
      case CONTACT_ICON_KEY.ICON_MESSENGER:
        return settings.link || "";
      default:
        return "";
    }
  };

  const getIconColor = ({ key, settings }: ContactIconType) => {
    if (settings?.iconColor) return settings.iconColor;

    switch (key) {
      case CONTACT_ICON_KEY.ICON_HOTLINE:
      case CONTACT_ICON_KEY.ICON_EMAIL:
        return "#FFFFFF";
      case CONTACT_ICON_KEY.ICON_ZALO:
      case CONTACT_ICON_KEY.ICON_FACEBOOK:
      case CONTACT_ICON_KEY.ICON_MESSENGER:
        return "#0C8CE9";
      default:
        return "";
    }
  };

  const getTextColor = ({ key, settings }: ContactIconType) => {
    if (settings?.textColor) return settings.textColor;

    switch (key) {
      case CONTACT_ICON_KEY.ICON_HOTLINE:
      case CONTACT_ICON_KEY.ICON_EMAIL:
        return "#000000";
      case CONTACT_ICON_KEY.ICON_ZALO:
      case CONTACT_ICON_KEY.ICON_FACEBOOK:
      case CONTACT_ICON_KEY.ICON_MESSENGER:
        return "#FFFFFF";
      default:
        return "";
    }
  };

  const listLeft: ContactIconType[] = [];
  const listRight: ContactIconType[] = [];

  Object.values(contactIcons || {})?.forEach((item) => {
    if (item.status !== BASE_STATUS.ACTIVE) return;
    if (item.settings?.position === CONTACT_ICON_POSITION.BOTTOM_RIGHT) {
      listRight.push(item);
    } else {
      listLeft.push(item);
    }
  });

  const renderIcons = ({ list }: { list: ContactIconType[] }) => {
    return list?.map((item) => (
      <Link href={getLink(item)} key={item.key} target="_blank">
        <div className="flex items-center justify-center">
          <ContactIcon
            icon={getIconByKey(item.key)}
            theme={item.settings?.theme || "basic"}
            iconColor={getIconColor(item)}
            textColor={getTextColor(item)}
            text={getTextByKey(item)}
          />
        </div>
      </Link>
    ));
  };
  return (
    <>
      <div className="fixed bottom-4 left-4 flex h-fit flex-col items-start gap-3">
        {renderIcons({ list: listLeft })}
      </div>
      <div className="fixed bottom-4 right-4 flex h-fit flex-col items-end gap-3">
        {renderIcons({ list: listRight })}
      </div>
    </>
  );
};

export default ContactIconsFloat;
