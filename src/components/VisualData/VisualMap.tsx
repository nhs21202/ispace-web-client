import { cn } from "@/utilities/helper/common.helper";
import { getMapData } from "@/utilities/helper/pageSection.helper";
import { PageSection } from "@/utilities/types/pageSection.type";
import { Button } from "antd";
import React from "react";

type Props = { list: PageSection[]; sectionKey: string };

const VisualMap = ({ list, sectionKey }: Props) => {
  const [show, setShow] = React.useState(false);
  const data = getMapData(list, sectionKey);
  return (
    <div key={sectionKey} className="relative w-full rounded border p-2">
      <div id={sectionKey} className="absolute -top-20" />
      <p className="bg-pink-200">type: Map</p>
      <p>Title: {data.sectionTitle}</p>
      <p>Key: {sectionKey}</p>
      <Button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</Button>
      <div
        className={cn("w-full max-w-xl", {
          hidden: !show,
        })}
      >
        <p>{data.mapIframe}</p>
      </div>
    </div>
  );
};

export default VisualMap;
