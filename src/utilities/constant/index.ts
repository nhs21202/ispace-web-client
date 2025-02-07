export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const GOOGLE_MAP_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
export const DATA_BASE_NAME = process.env.NEXT_PUBLIC_DATA_BASE_NAME;
export const DEFAULT_LAT = Number(process.env.NEXT_PUBLIC_DEFAULT_LAT);
export const DEFAULT_LNG = Number(process.env.NEXT_PUBLIC_DEFAULT_LNG);

/**
 * !DO NOT MODIFY THESE
 */
export const PAGE_KEY_POST = "post";
export const PAGE_KEY_PRODUCT = "product";
export const PAGE_KEY_HOME = "home";
export const HEADER_SLUG_KEY = "x-slug";
export const SLUG_POST_DEFAULT = "post";
export const SLUG_PRODUCT_DEFAULT = "product";
export const DEFAULT_POST_TAG = "tag";

export enum PAGE_KEY {
  /**
   * !DO NOT MODIFY THESE
   * - These keys is fixed for both admin and client
   */
  HOME = PAGE_KEY_HOME,
  PRODUCT = PAGE_KEY_PRODUCT,
  POST = PAGE_KEY_POST,

  /**
   *
   * TODO [config]: Additional page key here
   *
   */
  ABOUT = "about",
  CONTACT = "contact",
}

const folderKeyMap: Record<string, string> = {
  [PAGE_KEY.HOME]: "home",
  [PAGE_KEY.POST]: "post",
  [PAGE_KEY.PRODUCT]: "product",
  [PAGE_KEY.CONTACT]: "contact",
  [PAGE_KEY.ABOUT]: "about",
};

export const getFolderNameByPageKey = (pageKey: string) => {
  return folderKeyMap[pageKey] || "";
};
