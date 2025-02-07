import { API_URL, DATA_BASE_NAME } from "@/utilities/constant";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import {
  getAccessToken,
  getLangCookies,
  getRefreshToken,
  removeToken,
  storeToken,
} from "@/utilities/helper/common.helper";
import axios, { AxiosError } from "axios";
import { BaseResponse, TokenResponse } from "@/utilities/types/common.type";
import { get } from "lodash";

const tokenErrorMessages = ["invalid signature", "jwt malformed"];
const authPath = ["/auth/refresh-token", "/auth/login"];

const clientApi = axios.create({
  baseURL: API_URL,
  headers: { "x-db-name": DATA_BASE_NAME || "" },
});

createAuthRefreshInterceptor(
  clientApi,
  (failedRequest) => {
    const refreshToken = getRefreshToken();

    return clientApi
      .post("/auth/refresh-token", { token: refreshToken })
      .then((response: BaseResponse<TokenResponse>) => {
        const { accessToken, refreshToken } = response.data;
        storeToken({ accessToken, refreshToken });

        failedRequest.config.headers["Authorization"] = "Bearer " + accessToken;
        return Promise.resolve();
      })
      .catch(() => {
        removeToken();
        return Promise.reject();
      });
  },
  {
    pauseInstanceWhileRefreshing: true,

    shouldRefresh(error: AxiosError) {
      const refreshToken = getRefreshToken();
      const path = get(error, "response.config.url") || "";
      const status = get(error, "response.status");
      const errorMessage = get(error, "response.data.error.message") || "";

      const is401 = status === 401 && !authPath.includes(path);
      const is500 = status === 500 && tokenErrorMessages.includes(errorMessage);

      return !!refreshToken && (is401 || is500);
    },
  },
);

clientApi.interceptors.request.use((config) => {
  const token = getAccessToken();
  const lang = getLangCookies();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Language"] = lang;
  }
  return config;
});

clientApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const path = get(error, "response.config.url") || "";
    const status = get(error, "response.status");
    const errorMessage = get(error, "response.data.error.message") || "";

    const is401 = status === 401 && !authPath.includes(path);
    const is500 = status === 500 && tokenErrorMessages.includes(errorMessage);

    if (is401 || is500) removeToken();

    return Promise.reject(error);
  },
);

export default clientApi;
