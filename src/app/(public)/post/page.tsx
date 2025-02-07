import React from "react";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import { getServerPosts } from "@/api/post/sever";
import Link from "next/link";
import { getPageByKey } from "@/api/clientPages/sever";
import { PAGE_KEY, SLUG_POST_DEFAULT } from "@/utilities/constant";

type Props = {
  searchParams: {
    page?: number;
    limit?: number;
    // TODO [page]: add more search params
  };
};

const PostPage = async ({ searchParams }: Props) => {
  const { page = 1, limit = 12 } = searchParams;
  /**
   * TODO [page]: get page info for server side
   *
   * 1. get Post list from server
   * const postList = await getServerPosts({ page: 1, limit: 100 });
   *
   */

  const postList = await getServerPosts(
    { page: Number(page), limit: Number(limit) },
    { next: { revalidate: 600 } },
  );
  const postPageInfo = await getPageByKey(PAGE_KEY.POST);

  return (
    <div>
      <h1 className="my-10 text-center">Post List</h1>

      <div className="container mx-auto my-10 grid grid-cols-3 gap-2">
        {postList?.data?.map((item) => (
          <Link
            key={item.id}
            href={`/${postPageInfo?.slug || SLUG_POST_DEFAULT}/${item.tags?.[0] || "tag"}/${item.slug}`}
          >
            <BlockPlaceholder
              className="h-48 w-full p-3"
              text={<p className="line-clamp-6">{item.title}</p>}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
