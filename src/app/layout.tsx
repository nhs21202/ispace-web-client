import { getServerWebSettings } from "@/api/settings/sever";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import CustomScript from "@/components/CustomScript";
import AllProvider from "@/components/AllProvider";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const webInfos = await getServerWebSettings();

  return {
    title: webInfos?.SITE_SETTING.name,
    description: webInfos?.SITE_SETTING.name,
    icons: {
      icon: webInfos?.SITE_SETTING?.favicon?.src,
    },
  };
};

const RootLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const webInfos = await getServerWebSettings();

  return (
    <html lang="en">
      <head>
        <CustomScript scrips={webInfos?.CUSTOM_CODE?.head} />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden`}
      >
        <AllProvider>{children}</AllProvider>
        <CustomScript scrips={webInfos?.CUSTOM_CODE?.body} />
      </body>
    </html>
  );
};

export default RootLayout;
