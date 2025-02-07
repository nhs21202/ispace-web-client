import clientApi from "../clientApi";

export const postSubmitForm = (data: {
  formId: number;
  data: { key: string; value: string }[];
}) => {
  return clientApi.post("/client/forms", data);
};
