import React from "react";
import DetailOrder from "./DetailOrder";
import { getServerWebSettings } from "@/api/settings/sever";
import { PAYMENT_METHOD_KEY } from "@/utilities/types/settings.type";

type Props = {
  params: {
    id: number;
  };
};
const page2 = async ({ params }: Props) => {
  const settings = await getServerWebSettings();
  const banks =
    settings?.PAYMENT_METHOD.find((pm) => pm.key === PAYMENT_METHOD_KEY.ACCOUNT)
      ?.paymentMethodDetails || [];

  return <DetailOrder orderId={params.id} banks={banks} />;
};

export default page2;
