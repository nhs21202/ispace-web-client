export enum BASE_STATUS {
  ACTIVE = 1,
  INACTIVE = 0,
}

export type BaseResponse<T> = {
  data: T;
};

export type BaseListPayload = {
  page?: number;
  limit?: number;
  order?: string;
  search?: string;
};

export type ListResponse<T> = {
  data: T[];
  total: number;
  pages: number;
};

export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type MetaData = {
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: string | null;
};
