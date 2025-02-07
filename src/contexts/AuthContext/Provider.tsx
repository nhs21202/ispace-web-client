"use client";

import { getUserMe, login } from "@/api/auth/client";
import {
  getAccessToken,
  removeToken,
  storeToken,
} from "@/utilities/helper/common.helper";
import { CustomerInfo } from "@/utilities/types/user.type";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext, AuthContextType } from "./context";

const AuthProvider = (props: PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<CustomerInfo | undefined>();
  const [isUserInfoInitd, setIsUserInfoInitd] = useState(false);
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const router = useRouter();

  const refreshUserInfo = async () => {
    if (!getAccessToken()) {
      setUserInfo(undefined);
      return;
    }

    const response = await getUserMe();
    if (response) {
      setUserInfo(response);
    }
  };

  useEffect(() => {
    refreshUserInfo().finally(() => {
      setIsUserInfoInitd(true);
    });
  }, []);

  const handleLogin = useCallback(
    async (payload: { key: string; password: string }) => {
      const response = await login(payload);
      if (response?.data?.data) {
        storeToken(response.data.data);
      }
      refreshUserInfo();

      return response?.data?.data;
    },
    [],
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUserInfo(undefined);
    router.push("/");
  }, [router]);

  const value: AuthContextType = useMemo(
    () => ({
      userInfo,
      openModalAuth,
      setOpenModalAuth,
      isUserInfoInitd,
      refreshUserInfo,
      onLogin: handleLogin,
      onLogout: handleLogout,
    }),
    [handleLogin, handleLogout, isUserInfoInitd, openModalAuth, userInfo],
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
