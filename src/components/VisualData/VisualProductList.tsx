"use client";

import { getProductData } from "@/utilities/helper/pageSection.helper";
import Image from "next/image";
import { PageSection } from "@/utilities/types/pageSection.type";
import React from "react";
import { cn } from "@/utilities/helper/common.helper";
import { Button } from "antd";

type Props = { list: PageSection[]; sectionKey: string };

const VisualProductList = ({ list, sectionKey }: Props) => {
  const [show, setShow] = React.useState(false);
  const data = getProductData(list, sectionKey);

  return (
    <div key={sectionKey} className="relative w-full rounded border p-2">
      <div id={sectionKey} className="absolute -top-20" />
      <p className="bg-violet-200">type: ProductList</p>
      <p>Title: {data.sectionTitle}</p>
      <p>Key: {sectionKey}</p>

      <Button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} - {data.items?.length ?? 0} items
      </Button>
      <div
        className={cn("w-full max-w-xl", {
          hidden: !show,
        })}
      >
        <p>titleHref: {data.titleHref}</p>
        <p>maxDisplayed: {data.maxDisplayed}</p>
        <p>sortBy: {data.sortBy}</p>
        <p>categoryValue: {data.categoryValue}</p>
        <p>type: {data.type}</p>
        {data.items?.map((carouselItem, index) => {
          return (
            <div key={index} className="flex gap-1 border p-2">
              <Image
                src={carouselItem.medias?.[0]?.src}
                alt={""}
                width={200}
                height={200}
                className="h-20 w-40 object-contain object-top"
              />
              <div className="flex-grow">
                <p>name: {carouselItem.name}</p>
                <p>
                  categories:{" "}
                  {carouselItem.categories
                    ?.map((item) => item.name)
                    ?.join("; ")}
                </p>
                <p>description: {carouselItem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualProductList;
