import { EMPTY_LIST } from "@/utilities/constant/string";
import { qs } from "@/utilities/helper/search.helper";
import {
  BaseListPayload,
  BaseResponse,
  ListResponse,
} from "@/utilities/types/common.type";
import { PostDetail, PostListItem } from "@/utilities/types/post.type";
import clientApi from "../clientApi";

// CLIENT REQUEST
export const getClientDetailPostBySlug = async (slug: string) => {
  try {
    const res = await clientApi.get<BaseResponse<PostDetail>>(
      `/client/posts/slug/${slug}`,
    );
    return res?.data?.data || null;
  } catch {
    return null;
  }
};

export const getClientDetailPostById = async (id: PostDetail["id"]) => {
  try {
    const res = await clientApi.get<BaseResponse<PostDetail>>(
      `/client/posts/${id}`,
    );
    return res?.data?.data || null;
  } catch {
    return null;
  }
};

export const getClientPosts = async ({
  page = 1,
  limit = 5,
  order = qs.order("createdAt", "DESC") || "",
  search = "",
}: BaseListPayload) => {
  try {
    const query = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      order,
      search,
    });
    const res = await clientApi.get<ListResponse<PostListItem>>(
      `/client/posts/?${query}`,
    );
    return res.data;
  } catch {
    return EMPTY_LIST;
  }
};
