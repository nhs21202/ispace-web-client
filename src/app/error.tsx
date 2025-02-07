"use client";

import { Button } from "antd";
import Link from "next/link";

const ErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  const errorMessage = error?.message;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h2 className="text-6xl font-bold text-primary">Oops!</h2>

      <p className="line-clamp-5 max-w-lg text-center italic text-slate-500">
        {errorMessage || "Có lỗi xảy ra"}
      </p>
      <Link
        href={"/"}
        className="mt-5 block text-center underline hover:text-primary hover:underline"
      >
        <Button type="primary">Về trang chủ</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
