import { BaseMedia } from "./media.type";

export type Popup = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  title: string;
  link: string;
  from: string;
  to: string;
  status: number;
  mediaId: number;
  image: BaseMedia;
};
