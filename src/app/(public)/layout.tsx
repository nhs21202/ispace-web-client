import MainLayout from "@/components/Layout/MainLayout";
import React, { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return <MainLayout showContactIcon>{children}</MainLayout>;
};

export default PublicLayout;
