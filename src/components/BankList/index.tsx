"use client";

import { Select, Typography } from "antd";
import React, { useMemo } from "react";
import Image from "next/image";
import { PaymentMethodDetail } from "@/utilities/types/settings.type";

type Props = {
  banks?: PaymentMethodDetail[];
};
const BankList = ({ banks = [] }: Props) => {
  const [selectBank, setSelectBank] = React.useState(banks?.[0]?.id);

  const selectedBankInfo = useMemo(() => {
    return banks?.find((item) => item.id === selectBank);
  }, [selectBank, banks]);

  return (
    <div className="my-4">
      <h3 className="mb-3 text-lg font-semibold">Danh sách ngân hàng</h3>
      <Select
        options={banks.map((item) => ({
          value: item.id,
          label: item.bankName,
        }))}
        onChange={setSelectBank}
        className="w-full"
        value={selectBank}
      />

      <div className="flex flex-col items-center justify-between">
        {selectedBankInfo?.qrCode?.src && (
          <Image
            src={selectedBankInfo.qrCode?.src}
            alt="QR Code"
            className="h-72 w-72"
            width={288}
            height={288}
          />
        )}
        <div className="flex flex-col items-center">
          <p className="font-bold">{selectedBankInfo?.bankName}</p>
          <p className="text-lg uppercase">{selectedBankInfo?.fullName}</p>
          <Typography.Paragraph className="text-lg" copyable>
            {selectedBankInfo?.accountNumber}
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
};

export default BankList;
