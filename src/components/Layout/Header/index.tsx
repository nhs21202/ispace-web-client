import React from "react";

import HeaderDetails from "./HeaderDetails";
import menus from "@/mocks/menus";

const HeaderLayout = async () => {
  return <HeaderDetails menus={menus} />;
};

export default HeaderLayout;
