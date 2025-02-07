import OtpForm from "@/components/CommonForm/OtpForm";
import TimerOtp from "@/components/TimerOtp";
import Link from "next/link";

const VerifyOtpPage = ({
  searchParams,
}: {
  searchParams: { email: string };
}) => {
  const email = searchParams.email;

  if (!email) {
    throw new Error("Page not found");
  }

  return (
    <div className="px-10">
      <div className="mb-5">
        <p className="mb-2 text-center text-3xl font-bold">Xác minh OTP</p>
        <p className="text-center text-slate-500">
          Vui lòng điền mã OTP đã gửi tới email của bạn
        </p>
      </div>
      <OtpForm email={String(email)} />
      <div className="flex items-center justify-between pt-5">
        <Link href={"/forgot-password"} className="block">
          Quay lại
        </Link>
        <TimerOtp email={String(email)} />
      </div>
    </div>
  );
};

export default VerifyOtpPage;
