import { getServerWebSettings } from "@/api/settings/sever";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import React from "react";
import Image from "next/image";

const LoadingComponent = async () => {
  const webInfos = await getServerWebSettings();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {webInfos?.SITE_SETTING?.logoHeader?.src ? (
        <>
          <Image
            alt="logo"
            className="h-44 max-w-72 object-contain"
            src={webInfos?.SITE_SETTING?.logoHeader?.src}
            width={webInfos?.SITE_SETTING?.logoHeader?.width || 400}
            height={webInfos?.SITE_SETTING?.logoHeader?.height || 400}
          />
          <p className="animate-pulse text-lg text-slate-600">Đang tải...</p>
        </>
      ) : (
        <BlockPlaceholder
          text="Đang tải dữ liệu ..."
          className="w-fit animate-pulse bg-white text-3xl font-bold text-slate-600"
        />
      )}
    </div>
  );
};

export default LoadingComponent;
