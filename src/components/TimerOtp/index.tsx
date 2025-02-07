"use client";

import { forgotPassword } from "@/api/auth/client";
import { DEFAULT_ERROR_MESSAGE } from "@/utilities/constant/string";
import {
  cn,
  getErrorMessage,
  numberWithZeros,
} from "@/utilities/helper/common.helper";
import { App } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

const EXPIRED_SECONDS_OTP = 60;

type Props = { email: string };

const TimerOtp = ({ email }: Props) => {
  const [reSendOtpAble, setReSendOtpAble] = useState(false);
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  const getExpiredTime = () =>
    dayjs().add(EXPIRED_SECONDS_OTP, "second").toDate();

  const { seconds, minutes, restart } = useTimer({
    autoStart: true,
    expiryTimestamp: getExpiredTime(),
    onExpire: () => setReSendOtpAble(true),
  });

  const onResendOtp = async () => {
    try {
      setLoading(true);
      await forgotPassword({ email });
      
      message.success("Mã OTP gửi thành công.");
      restart(getExpiredTime());
      setReSendOtpAble(false);
    } catch (error) {
      message.error(getErrorMessage(error) || DEFAULT_ERROR_MESSAGE);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {reSendOtpAble ? (
        <p
          className={cn(
            "cursor-pointer text-sm text-blue-500 hover:underline",
            loading ? "text-gray-500" : "",
          )}
          onClick={() => !loading && onResendOtp()}
        >
          Gửi lại
        </p>
      ) : (
        <p className="text-sm underline">
          Gửi lại sau: {numberWithZeros(minutes)}:{numberWithZeros(seconds)}
        </p>
      )}
    </div>
  );
};

export default TimerOtp;
