import React from "react";

import CheckoutPageWrap from "./CheckoutPageWrap";
import { getServerWebSettings } from "@/api/settings/sever";

const CheckoutPage = async () => {
  const settings = await getServerWebSettings();

  return <CheckoutPageWrap paymentMethods={settings?.PAYMENT_METHOD} />;
};

export default CheckoutPage;
