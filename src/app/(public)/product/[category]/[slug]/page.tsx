import React from "react";
import { getServerDetailProductBySlug } from "@/api/product/sever";
import HtmlContent from "@/components/HtmlContent";
import ProductSpecifications from "./ProductSpecifications";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const ProductDetail = async ({ params: { slug } }: Props) => {
  const productDetail = await getServerDetailProductBySlug(slug);

  return (
    <div className="container mx-auto flex min-h-96 flex-col items-center justify-center gap-3 py-3">
      <h1 className="text-xl font-bold">
        {productDetail?.name || "Product name"}
      </h1>
      <div className="grid w-full grid-cols-2 items-start gap-3">
        <div className="flex max-h-[400px] flex-wrap justify-center gap-3 overflow-y-auto">
          {productDetail?.medias?.map((media) => (
            <Image
              key={media.id}
              src={media.src}
              alt={media.name}
              width={200}
              height={200}
              className="!h-48 !w-48 object-cover"
            />
          ))}
        </div>
        <ProductSpecifications productDetail={productDetail} />
      </div>

      <HtmlContent
        className="container mx-auto"
        content={productDetail?.description}
      />
    </div>
  );
};

export default ProductDetail;
