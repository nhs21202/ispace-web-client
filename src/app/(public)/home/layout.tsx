import { getActivePopups } from "@/api/popups/sever";
import React, { PropsWithChildren } from "react";

const HomePageLayout = async ({ children }: PropsWithChildren) => {
  const popUp = await getActivePopups({ next: { revalidate: 900 } });

  return (
    <>
      {children}
    </>
  );
};

export default HomePageLayout;
