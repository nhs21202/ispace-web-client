import { BASE_STATUS } from "./common.type";
import { BaseMedia } from "./media.type";

export enum PAYMENT_METHOD_KEY {
  CASH_ON_DELIVERY = "COD",
  ACCOUNT = "ACCOUNT",
}

export type WebSettingsType = {
  SITE_SETTING: SiteSetting;
  BUSSINESS_INFO: BusinessInfo;
  PAYMENT_METHOD: PaymentMethod[];
  CUSTOM_CODE?: Record<CODE_TYPE, CustomCodeType[]>;
  PLUGIN_CONTACT_ICON?: ContactIconType[];
  APPLICATION_SETTING?: ApplicationSettingType;
  LANGUAGE_SETTING?: LanguageType[];
};

export type SiteSetting = {
  name: string;
  favicon: BaseMedia;
  socialLinks: { src: string; name: string }[];
  faviconMediaId: BaseMedia["id"];
  logoFooterMediaId: BaseMedia["id"];
  logoHeaderMediaId: BaseMedia["id"];
  logoHeader: BaseMedia;
  logoFooter: BaseMedia;
};

export type BusinessInfo = {
  logo: BaseMedia;
  name: string;
  email: string;
  phone: string;
  address: string;
  favicon: BaseMedia;
  faxNumber: string;
  issueDate: string | null;
  locations: {
    email: string;
    phone: string;
    address: string;
  }[];
  taxNumber: string;
  description: string;
  businessLicense: string;
};

export type PaymentMethod = {
  id: number;
  name: string;
  key: PAYMENT_METHOD_KEY;
  paymentMethodDetails: PaymentMethodDetail[];
};

export type PaymentMethodDetail = {
  id: number;
  bankName: string;
  fullName: string;
  accountNumber: string;
  paymentMethodId: PaymentMethod["id"];
  status: BASE_STATUS;
  qrCode: BaseMedia;
};

export type CustomCodeType = {
  code: string;
  title: string;
};

export enum CODE_TYPE {
  HEAD = "head",
  BODY = "body",
}

export enum CONTACT_ICON_KEY {
  ICON_HOTLINE = "ICON_HOTLINE",
  ICON_EMAIL = "ICON_EMAIL",
  ICON_ZALO = "ICON_ZALO",
  ICON_FACEBOOK = "ICON_FACEBOOK",
  ICON_MESSENGER = "ICON_MESSENGER",
}

export type ContactIconType = {
  key: CONTACT_ICON_KEY;
  title: string;
  settings: {
    email?: string;
    link?: string;
    phone?: string;
    position?: CONTACT_ICON_POSITION;
    theme?: CONTACT_ICON_THEME;
    iconColor?: string;
    textColor?: string;
  };
  status: BASE_STATUS;
};

export enum CONTACT_ICON_THEME {
  BASIC = "basic",
  PULSE = "pulse",
  PULSE_WITH_TEXT = "pulse-with-text",
}

export enum CONTACT_ICON_POSITION {
  BOTTOM_LEFT = "bottomLeft",
  BOTTOM_RIGHT = "bottomRight",
}

export type ApplicationSettingType = {
  id: number;
  logo: BaseMedia;
  textColor: string;
  primaryColor: string;
  applicationName: string;
};

export type LanguageType = {
  name: string;
  status: BASE_STATUS;
  longCode: string;
  isDefault: boolean;
  shortCode: string;
  media?: BaseMedia;
};
