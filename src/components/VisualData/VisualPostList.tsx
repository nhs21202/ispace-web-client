"use client";

import { getPostData } from "@/utilities/helper/pageSection.helper";
import Image from "next/image";

import { PageSection } from "@/utilities/types/pageSection.type";
import React from "react";
import { cn } from "@/utilities/helper/common.helper";
import { Button } from "antd";

type Props = { list: PageSection[]; sectionKey: string };

const VisualPostList = ({ list, sectionKey }: Props) => {
  const [show, setShow] = React.useState(false);
  const data = getPostData(list, sectionKey);

  return (
    <div key={sectionKey} className="relative w-full rounded border p-2">
      <div id={sectionKey} className="absolute -top-20" />
      <p className="bg-pink-200">type: PostList</p>
      <p>Title: {data.sectionTitle}</p>
      <p>Key: {sectionKey}</p>

      <Button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} - {data?.posts?.length ?? 0} items
      </Button>
      <div
        className={cn("w-full max-w-xl", {
          hidden: !show,
        })}
      >
        <p>titleHref: {data.titleHref}</p>
        <p>maxDisplayed: {data.maxDisplayed}</p>
        <p>sortBy: {data.sortBy}</p>
        <p>tags: {data.tags}</p>
        <p>type: {data.type}</p>
        {data.posts?.map((carouselItem, index) => {
          return (
            <div key={index} className="flex gap-1 border p-2">
              <Image
                src={carouselItem?.mediaUrl}
                alt={""}
                width={200}
                height={200}
                className="h-20 w-40 object-contain object-top"
              />
              <div className="flex-grow">
                <p>title: {carouselItem.title}</p>
                <p>subTitle: {carouselItem.subTitle}</p>
                <p>writeDate: {carouselItem.writeDate}</p>
                <p>link: {carouselItem.link}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualPostList;
