import RegisterForm from "@/components/CommonForm/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="px-10">
      <div className="mb-5">
        <p className="mb-2 text-center text-3xl font-bold">Đăng ký</p>
      </div>
      <RegisterForm />
      <div className="mt-5 flex items-center justify-center">
        <p>
          Đã có tài khoản?{" "}
          <Link
            href={"/login"}
            className="cursor-pointer font-bold italic hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
