import { MetaData } from "./common.type";

export enum FileTypeEnum {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
}

export enum FIELD_TYPE {
  TEXT = "TEXT",
  INPUT_TEXT = "INPUT_TEXT",
  INPUT_EMAIL = "INPUT_EMAIL",
  BUTTON = "BUTTON",
  CHOICE_SINGLE = "CHOICE_SINGLE",
  CHOICE_MULTIPLE = "CHOICE_MULTIPLE",
  CHOICE_CHECKBOX = "CHOICE_CHECKBOX",
  CHOICE_DROPDOWN = "CHOICE_DROPDOWN",
  UPLOAD = "UPLOAD",
}

export type FieldType = {
  formFieldGroupId: number;
  title: string;
  type: string;
  key?: string;
  content?: string;
  successMessage?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  isRequired?: boolean;
  options?: string[];
  fileTypes?: FileTypeEnum[];
  uploadMultiple?: boolean;
};

export enum FORM_STATUS {
  DRAFT = 0,
  PUBLISHED = 1,
}

export type FormDetail = MetaData & {
  id: number;
  name: string;
  key: string;
  status: FORM_STATUS;
  formFieldExpected: FieldType[];
};
