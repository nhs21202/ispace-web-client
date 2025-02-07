import ResetPasswordForm from "@/components/CommonForm/ResetPasswordForm";
import Link from "next/link";

const ResetPasswordPage = ({
  searchParams,
}: {
  searchParams: {
    email: string;
    code: string;
  };
}) => {
  const email = searchParams.email;
  const code = searchParams.code;

  if (!email || !code) {
    throw new Error("Page not found");
  }

  return (
    <div className="px-10">
      <div className="mb-5">
        <h1 className="mb-2 text-center text-3xl font-bold">Mật khẩu mới</h1>
        <p className="text-center text-slate-500">Vui lòng nhập mật khẩu mới</p>
      </div>

      <ResetPasswordForm email={String(email)} code={String(code)} />
      <Link
        href={"/login"}
        className="mt-5 block text-center underline hover:text-primary hover:underline"
      >
        Quay lại
      </Link>
    </div>
  );
};

export default ResetPasswordPage;
