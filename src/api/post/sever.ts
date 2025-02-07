import { EMPTY_LIST } from "@/utilities/constant/string";
import { PostDetail, PostListItem } from "@/utilities/types/post.type";
import {
  BaseListPayload,
  BaseResponse,
  ListResponse,
} from "@/utilities/types/common.type";
import { createSearchParams } from "@/utilities/helper/common.helper";
import { serverApi } from "../serverApi";

// SERVER REQUEST
export const getServerDetailPostBySlug = async (slug: string) => {
  try {
    const res = await serverApi<BaseResponse<PostDetail>>(
      `/client/posts/slug/${slug}`,
    );
    return res?.data || null;
  } catch {
    return null;
  }
};

export const getServerDetailPostById = async (id: PostDetail["id"]) => {
  try {
    const res = await serverApi<BaseResponse<PostDetail>>(
      `/client/posts/${id}`,
    );
    return res?.data || null;
  } catch {
    return null;
  }
};

export const getServerPosts = async (
  payload: BaseListPayload,
  options?: RequestInit,
) => {
  try {
    const queryParams = createSearchParams(payload);

    const res = await serverApi<ListResponse<PostListItem>>(
      `/client/posts/?${queryParams.toString()}`,
      options,
    );
    return res;
  } catch {
    return EMPTY_LIST;
  }
};
