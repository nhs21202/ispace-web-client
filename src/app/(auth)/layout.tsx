import { getServerWebSettings } from "@/api/settings/sever";
import Link from "next/link";
import Image from "next/image";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import React, { PropsWithChildren } from "react";

const AuthLayout = async ({ children }: PropsWithChildren) => {
  const webInfos = await getServerWebSettings();

  return (
    <div className="container mx-auto max-w-lg">
      <div className="my-20 rounded-xl border p-5">
        <div className="flex items-center justify-center">
          {webInfos?.SITE_SETTING?.logoHeader?.src ? (
            <Link href={"/"}>
              <Image
                src={webInfos?.SITE_SETTING?.logoHeader?.src}
                className="h-36 object-contain"
                alt="logo"
                height={webInfos?.SITE_SETTING?.logoHeader?.height || 400}
                width={webInfos?.SITE_SETTING?.logoHeader?.width || 400}
              />
            </Link>
          ) : (
            <BlockPlaceholder text="logo" className="h-10 w-40" />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
