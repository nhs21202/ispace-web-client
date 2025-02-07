"use client";

import { PageSection } from "@/utilities/types/pageSection.type";
import React from "react";
import VisualCarousel from "./VisualCarousel";
import VisualTextAndImage from "./VisualTextAndImage";
import VisualPostList from "./VisualPostList";
import VisualProductList from "./VisualProductList";
import Link from "next/link";

type Props = { list?: PageSection[] };

const VisualData = ({ list }: Props) => {
  return (
    <>
      <div className="fixed left-0 top-40 z-20 flex flex-col gap-2 border bg-white p-2">
        <p>List Key</p>
        {list?.map((item) => {
          return (
            <Link href={`#${item.key}`} key={item.key}>
              {item.key}
            </Link>
          );
        })}
      </div>
      <div className="mx-auto grid w-full max-w-xl grid-cols-1 gap-2">
        {list?.map((item) => {
          if (item.section.key === "carousel") {
            return (
              <VisualCarousel key={item.id} list={list} sectionKey={item.key} />
            );
          }

          if (item.section.key === "text-and-image") {
            return (
              <VisualTextAndImage
                key={item.id}
                list={list}
                sectionKey={item.key}
              />
            );
          }

          if (item.section.key === "post-list") {
            return (
              <VisualPostList key={item.id} list={list} sectionKey={item.key} />
            );
          }

          if (item.section.key === "category-with-products") {
            return (
              <VisualProductList
                key={item.id}
                list={list}
                sectionKey={item.key}
              />
            );
          }

          if (item.section.key === "map") {
            return (
              <VisualPostList key={item.id} list={list} sectionKey={item.key} />
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default VisualData;
