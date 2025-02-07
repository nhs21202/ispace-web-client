import Link from "next/link";
import ForgotPasswordForm from "@/components/CommonForm/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <div className="px-10">
      <div className="mb-5">
        <h1 className="mb-2 text-center text-3xl font-bold">Quên mật khẩu</h1>
        <p className="text-center text-slate-500">
          Vui lòng nhập email để nhận mã OTP
        </p>
      </div>
      <ForgotPasswordForm />
      <Link
        href={"/login"}
        className="mt-5 block text-center underline hover:underline"
      >
        Quay lại
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
