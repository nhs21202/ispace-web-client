import clientApi from "../clientApi";

export const uploadFile = (data: File) => {
  const formData = new FormData();
  formData.append("file", data);
  return clientApi.post("/client/files/", formData);
};
