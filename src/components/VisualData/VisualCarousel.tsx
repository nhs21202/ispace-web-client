"use client";

import { getCarouselData } from "@/utilities/helper/pageSection.helper";
import Image from "next/image";

import { PageSection } from "@/utilities/types/pageSection.type";
import React from "react";
import { cn } from "@/utilities/helper/common.helper";
import { Button } from "antd";

type Props = { list: PageSection[]; sectionKey: string };

const VisualCarousel = ({ list, sectionKey }: Props) => {
  const [show, setShow] = React.useState(false);
  const data = getCarouselData(list, sectionKey);

  return (
    <div key={sectionKey} className="relative w-full rounded border p-2">
      <div id={sectionKey} className="absolute -top-20" />

      <p className="bg-green-200">type: Carousel</p>
      <p>Title: {data.sectionTitle}</p>
      <p>Key: {sectionKey}</p>
      <Button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} - {data?.items?.length ?? 0} items
      </Button>

      <div
        className={cn("w-full max-w-xl", {
          hidden: !show,
        })}
      >
        {data.items?.map((carouselItem, index) => {
          return (
            <div key={index} className="flex gap-1 border p-2">
              {carouselItem.url && (
                <Image
                  src={carouselItem?.url}
                  alt={carouselItem?.url}
                  width={200}
                  height={200}
                  className="h-20 w-40 object-contain object-top"
                />
              )}
              <div className="flex-grow">
                <p>title: {carouselItem.title}</p>
                <p>link: {carouselItem.link}</p>
                <p>content: {carouselItem.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualCarousel;
