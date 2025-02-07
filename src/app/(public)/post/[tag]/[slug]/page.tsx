import React from "react";
import { getServerDetailPostBySlug } from "@/api/post/sever";
import HtmlContent from "@/components/HtmlContent";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetail = async ({ params: { slug } }: Props) => {
  const detailPost = await getServerDetailPostBySlug(slug);

  return (
    <div className="container mx-auto flex min-h-96 flex-col items-center justify-center">
      <h1 className="my-10 text-2xl font-bold">
        {detailPost?.title || "Detail Post"}
      </h1>
      <HtmlContent
        className="container mx-auto"
        content={detailPost?.content}
      />
    </div>
  );
};

export default PostDetail;
