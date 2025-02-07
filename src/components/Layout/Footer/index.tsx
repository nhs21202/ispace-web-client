import { getServerWebSettings } from "@/api/settings/sever";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import Image from "next/image";
import React from "react";

const Footer = async () => {
  const webInfos = await getServerWebSettings();

  return (
    <div className="bg-orange-50 pb-4 pt-8">
      <div className="container mx-auto grid grid-cols-4 gap-2">
        <div className="col-span-4 place-items-start md:col-span-1">
          {webInfos?.SITE_SETTING?.logoFooter?.src ? (
            <Image
              className="max-h-44 w-44 rounded-full object-contain"
              src={webInfos?.SITE_SETTING?.logoFooter?.src}
              width={webInfos?.SITE_SETTING?.logoFooter?.width || 288}
              height={webInfos?.SITE_SETTING?.logoFooter?.height || 288}
              alt="footer_image"
            />
          ) : (
            <BlockPlaceholder
              text="Logo Footer"
              className="h-44 w-44 rounded-full bg-gray-200"
            />
          )}
        </div>

        <div className="col-span-4 md:col-span-1">
          <p className="mb-3 text-lg font-bold">Cột 1</p>
          <ul className="text-md text-slate-500">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <p className="mb-3 text-lg font-bold">Cột 2</p>
          <ul className="text-md text-slate-500">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <BlockPlaceholder text="Extra form" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
