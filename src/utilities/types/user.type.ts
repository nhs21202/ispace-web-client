import { BASE_STATUS } from "./common.type";
import { CustomerAddress, GENDER } from "./customer.type";
import { BaseMedia } from "./media.type";

export type CustomerInfo = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: BaseMedia;
  status: BASE_STATUS;
  gender: GENDER;
  customerAddresses: CustomerAddress[];
};

export type EditCustomerPayload = Partial<{
  name: string;
  email: string;
  phone: string;
  gender: GENDER;
  avatar: {
    mediaId?: number;
  };
  customerAddresses: {
    address: string;
    name: string;
    phone: string;
  }[];
}>;
