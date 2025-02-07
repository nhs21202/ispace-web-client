import { API_URL, DATA_BASE_NAME } from "@/utilities/constant";
import { LANGUAGE } from "@/utilities/constant/storage";
import { cookies } from "next/headers";

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? "";
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint, @typescript-eslint/no-explicit-any
export const serverApi = async <T extends any>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const lang = await getCookie(LANGUAGE);

  return fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      "x-db-name": DATA_BASE_NAME || "",
      "Content-Language": lang,
      ...(options?.headers || {}),
    },
    ...options,
  }).then((res) => res.json() as T);
};
