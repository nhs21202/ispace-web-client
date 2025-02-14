"use client";

import { Button } from "antd";
import Link from "next/link";
import React from "react";
const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h2 className="text-9xl font-bold text-primary animate-pulse">404</h2>
      <p className="text-3xl text-slate-500">Không tìm thấy trang</p>

      <Link
        href={"/"}
        className="mt-5 block text-center underline hover:text-primary hover:underline"
      >
        <Button type="primary">Về trang chủ</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
