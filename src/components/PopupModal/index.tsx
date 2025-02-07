"use client";

import Cookies from "js-cookie";
import { cn } from "@/utilities/helper/common.helper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popup } from "@/utilities/types/popups.type";
import { IoCloseSharp } from "react-icons/io5";
import dayjs from "dayjs";
import { POPUP_CLOSED_IMAGE_ID } from "@/utilities/constant/storage";

const PopupModal = ({ data }: { data: Popup | null }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    if (!data) return;

    const closedMediaId = Cookies.get(POPUP_CLOSED_IMAGE_ID);
    if (closedMediaId && data.mediaId === Number(closedMediaId)) return;

    setShowPopup(true);
    document.body.style.overflow = "hidden";
  }, [data]);

  const onClosePopup = () => {
    document.body.style.overflow = "unset";

    if (data?.mediaId) {
      const diff = dayjs().endOf("day").diff(dayjs(), "second");
      Cookies.set(POPUP_CLOSED_IMAGE_ID, String(data?.mediaId), {
        expires: diff,
      });
    }
    setShowPopup(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/20",
        { hidden: !showPopup },
      )}
      onClick={onClosePopup}
    >
      <div
        className="absolute right-4 top-4 cursor-pointer text-red-500 hover:bg-slate-300/70"
        onClick={onClosePopup}
      >
        <IoCloseSharp className="text-5xl" />
      </div>
      <Link
        href={data?.link || "#"}
        target="_blank"
        onClick={(e) => {
          document.body.style.overflow = "unset";
          e.stopPropagation();
        }}
      >
        {data?.image?.src ? (
          <Image
            src={data?.image?.src || ""}
            width={data?.image?.width || 200}
            height={data?.image?.height || 200}
            className="max-h-[500px] max-w-[500px] object-contain"
            alt="banner"
          />
        ) : null}
      </Link>
    </div>
  );
};

export default PopupModal;
