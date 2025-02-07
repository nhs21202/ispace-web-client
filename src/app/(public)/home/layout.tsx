import { getActivePopups } from "@/api/popups/sever";
import PopupModal from "@/components/PopupModal";
import React, { PropsWithChildren } from "react";

const HomePageLayout = async ({ children }: PropsWithChildren) => {
  const popUp = await getActivePopups({ next: { revalidate: 900 } });

  return (
    <>
      {children}
      <PopupModal data={popUp} />
    </>
  );
};

export default HomePageLayout;
