import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ACCESS_TOKEN, LANGUAGE, REFRESH_TOKEN, USER } from "../constant/storage";
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import { get } from "lodash";

export const numberWithZeros = (num: number, padCount = 2) => {
  return num.toString().padStart(padCount, "0");
};

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const commonActionItemClassName = "!px-5 !py-2 min-w-52";

export const storeToken = (payload: {
  accessToken: string;
  refreshToken: string;
  customer?: {
    id: number;
    name: string;
    username: string;
    phone: string;
    email: string;
    status: string;
    userRole: unknown[];
  };
}) => {
  Cookies.set(ACCESS_TOKEN, payload.accessToken);
  Cookies.set(REFRESH_TOKEN, payload.refreshToken);
  if (payload.customer) {
    Cookies.set(USER, JSON.stringify(payload.customer));
  }
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN);
};

export const getLangCookies = () => {
  return Cookies.get(LANGUAGE);
}

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN);
};

export const removeToken = () => {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
  Cookies.remove(USER);
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    return get(error.response, "data.error.message");
  }
  if (error instanceof Error) {
    return error.message;
  }
};

export const createSearchParams = (
  payload: Record<string, string | number | undefined | null> = {},
) => {
  const queryParams = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  });
  return queryParams;
};
