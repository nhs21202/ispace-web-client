import { cn } from "@/utilities/helper/common.helper";
import { getTextAndImageData } from "@/utilities/helper/pageSection.helper";
import { PageSection } from "@/utilities/types/pageSection.type";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

type Props = { list: PageSection[]; sectionKey: string };

const VisualTextAndImage = ({ list, sectionKey }: Props) => {
  const [show, setShow] = React.useState(false);
  const data = getTextAndImageData(list, sectionKey);

  return (
    <div key={sectionKey} className="relative w-full rounded border p-2">
      <div id={sectionKey} className="absolute -top-20" />
      <p className="bg-red-200">type: Text and Image</p>
      <p>Title: {data.sectionTitle}</p>
      <p>Key: {sectionKey}</p>
      <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</Button>

      <div
        className={cn("w-full max-w-xl", {
          hidden: !show,
        })}
      >
        <p>buttonPageId: {data.buttonPageId}</p>
        <p>buttonTitle: {data.buttonTitle}</p>
        <div className="flex">
          <p>image:</p>
          {data?.image && (
            <Image
              src={data?.image}
              alt={data?.image}
              width={200}
              height={200}
              className="h-20 w-40 object-contain object-top"
            />
          )}
        </div>
        <p>sectionTitle: {data.sectionTitle}</p>
        <p>text: {data.text}</p>
      </div>
    </div>
  );
};

export default VisualTextAndImage;
