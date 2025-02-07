import { FormDetail } from "../types/form.type";

export const getFieldByKey = (formDetail: FormDetail, key: string) => {
  return formDetail?.formFieldExpected.find((item) => item.key === key);
};
export const getFieldByType = (formDetail: FormDetail, type: string) => {
  return formDetail?.formFieldExpected.find((item) => item.type === type);
};
