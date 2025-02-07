import { TokenResponse } from "@/utilities/types/common.type";
import { CustomerInfo } from "@/utilities/types/user.type";
import { createContext } from "react";

export type AuthContextType = {
  openModalAuth: boolean;
  setOpenModalAuth: (value: boolean) => void;
  userInfo: CustomerInfo | undefined;
  isUserInfoInitd?: boolean;
  refreshUserInfo: () => Promise<void>;
  onLogin: (payload: {
    key: string;
    password: string;
  }) => Promise<TokenResponse | undefined>;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  openModalAuth: false,
  setOpenModalAuth: () => {},
  userInfo: undefined,
  isUserInfoInitd: false,
  refreshUserInfo: () => Promise.resolve(),
  onLogin: () => Promise.resolve(undefined),
  onLogout: () => Promise.resolve(),
});
