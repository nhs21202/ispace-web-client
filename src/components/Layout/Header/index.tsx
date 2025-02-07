import React from "react";
import { getPageByKey } from "@/api/clientPages/sever";
import MobileMenu from "./MobileMenu";
import { PAGE_KEY } from "@/utilities/constant";
import DesktopMenu from "./DesktopMenu";
import { getMenu } from "@/api/menu/sever";
import { getClientWebSettings } from "@/api/settings/sever";
import UserInfoNavbar from "./DesktopMenu/UserInfoNavbar";

const HeaderLayout = async () => {
  const postInfo = await getPageByKey(PAGE_KEY.POST);
  const pagePostSlug = postInfo?.slug;
  const menus = await getMenu();
  const webInfos = await getClientWebSettings();

  return (
    <div className="sticky inset-0 z-30 flex h-20 px-3 shadow">
      <MobileMenu menus={menus || []} pagePostSlug={pagePostSlug} />

      <DesktopMenu
        menus={menus || []}
        pagePostSlug={pagePostSlug}
        webInfos={webInfos}
      />
      <div className="mr-5 flex h-full flex-shrink-0 items-center">
        <UserInfoNavbar webInfos={webInfos} />
      </div>
    </div>
  );
};

export default HeaderLayout;
