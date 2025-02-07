import { MetaData } from "./common.type";
import { BaseMedia } from "./media.type";

export enum POST_STATUS {
  DRAFT = 0,
  PUBLISHED = 1,
}

export type BasePost = {
  id: number;
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  content: string;
  status: POST_STATUS;
  featuredImage: BaseMedia;
  bannerImage: BaseMedia;
};

export type PostListItem = BasePost & MetaData;

export type PostDetail = BasePost & MetaData;
