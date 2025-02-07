"use client";

import LoginForm from "@/components/CommonForm/LoginForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="px-10">
      <div className="mb-5">
        <p className="mb-2 text-center text-3xl font-bold">Đăng nhập</p>
      </div>
      <LoginForm onSuccess={() => router.push("/")} />
      <div className="mt-5 flex items-center justify-center">
        <p>
          Chưa có tài khoản?{" "}
          <Link
            href={"/register"}
            className="cursor-pointer font-bold italic hover:underline"
          >
            Đăng ký
          </Link>{" "}
          ngay
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
