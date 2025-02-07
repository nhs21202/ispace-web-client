import { BaseResponse, TokenResponse } from "@/utilities/types/common.type";
import { CustomerInfo, EditCustomerPayload } from "@/utilities/types/user.type";
import clientApi from "../clientApi";
import { GENDER } from "@/utilities/types/customer.type";

export const login = async (payload: { key: string; password: string }) => {
  return clientApi.post<BaseResponse<TokenResponse>>(
    "client/auth/login",
    payload,
  );
};

export const signup = async (payload: {
  email: string;
  password: string;
  name: string;
  phone: string;
  gender: GENDER;
  customerAddress: {
    address: string;
    name: string;
    phone: string;
  };
}) => {
  return clientApi.post("client/auth/register", payload);
};

export const changePassword = (payload: {
  currentPassword: string;
  newPassword: string;
}) => {
  return clientApi.patch("client/customers/me/password", payload);
};

export const getUserMe = async () => {
  try {
    const response = await clientApi.get<BaseResponse<CustomerInfo>>(
      "/client/customers/me",
    );
    return response.data?.data;
  } catch {
    return;
  }
};

export const updateUserMe = (payload: EditCustomerPayload) => {
  return clientApi.put("/client/customers/me", payload);
};

export const forgotPassword = (payload: { email: string }) => {
  return clientApi.post("client/auth/forgot-password", payload);
};

export const verifyOtp = (payload: { email: string; code: string }) => {
  return clientApi.post("client/auth/verify-recovery-code", payload);
};

export const updatePassword = (payload: {
  email: string;
  code: string;
  password: string;
}) => {
  return clientApi.put("client/auth/password", payload);
};
