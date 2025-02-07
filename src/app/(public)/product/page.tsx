import { getPageByKey } from "@/api/clientPages/sever";
import { getServerProductList } from "@/api/product/sever";
import BlockPlaceholder from "@/components/BlockPlaceholder";
import { PAGE_KEY, SLUG_PRODUCT_DEFAULT } from "@/utilities/constant";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: {
    page?: number;
    limit?: number;
    // TODO [page]: add more search params
  };
};

const ProductPage = async ({ searchParams }: Props) => {
  const { page = 1, limit = 12 } = searchParams;

  /**
   * TODO [page]: get page info for server side
   *
   * 1. get Product list from server
   * const productList = await getServerProductList({ page: 1, limit: 100 });
   *
   */

  const productList = await getServerProductList(
    { page: Number(page), limit: Number(limit) },
    { next: { revalidate: 600 } },
  );
  const productInfo = await getPageByKey(PAGE_KEY.PRODUCT);

  return (
    <div>
      <h1 className="my-10 text-center">Product List Page content</h1>

      <div className="container mx-auto my-10 grid grid-cols-3 gap-2">
        {productList?.data.map((item) => (
          <Link
            key={item.id}
            href={`/${productInfo?.slug || SLUG_PRODUCT_DEFAULT}/${item.categories?.[0]?.category?.slug || "category"}/${item.slug}`}
          >
            <BlockPlaceholder
              className="h-48 w-full p-3"
              text={<p className="line-clamp-6">{item.name}</p>}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
