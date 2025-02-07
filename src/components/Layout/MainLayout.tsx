import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import ContactIconsFloat from "../ContactIconsFloat";
import HeaderLayout from "./Header";

type Props = PropsWithChildren<{
  showContactIcon?: boolean;
}>;

const MainLayout = ({ children, showContactIcon }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <HeaderLayout />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
      {showContactIcon && <ContactIconsFloat />}
    </div>
  );
};

export default MainLayout;
