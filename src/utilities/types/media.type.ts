import { MetaData } from "./common.type";

export type BaseMedia = MetaData & {
  id: number;
  alt: string;
  description: string;
  dimensions: string | null;
  height: number | null;
  mimeType: string | null;
  name: string;
  parentId: BaseMedia["id"] | null;
  size: number;
  src: string;
  thumbnailSrc: string | null;
  title: string;
  type: "FOLDER" | string;
  width: number | null;
};

