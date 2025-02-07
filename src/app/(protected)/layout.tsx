import MainLayout from "@/components/Layout/MainLayout";
import { ACCESS_TOKEN } from "@/utilities/constant/storage";
import { cookies } from "next/headers";
import React, { PropsWithChildren } from "react";

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  // const accessToken = getAccessToken();
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get(ACCESS_TOKEN);

  if (!accessToken) {
    throw new Error("Page not found");
  }

  return <MainLayout showContactIcon={false}>{children}</MainLayout>;
};

export default ProtectedLayout;
