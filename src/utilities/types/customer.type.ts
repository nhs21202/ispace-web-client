import { BASE_STATUS, MetaData } from "./common.type";

export enum GENDER {
  MALE = 0,
  FEMALE = 1,
}

export type CustomerAddress = {
  id: number;
  name: string;
  phone: string;
  address: string;
  customerId: BaseCustomer["id"];
};

export type BaseCustomer = MetaData & {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: BASE_STATUS;
  gender: GENDER;
};

export type CustomerListItem = BaseCustomer & {
  customerAddresses: CustomerAddress[];
};

export type CustomerDetail = BaseCustomer & {
  customerAddresses: CustomerAddress[];
};
