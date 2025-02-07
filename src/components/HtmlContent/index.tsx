import { cn } from "@/utilities/helper/common.helper";
import DOMPurify, { Config } from "isomorphic-dompurify";
import React from "react";

type Props = {
  className?: string;
  content?: string;
  options?: Config;
};

const HtmlContent = ({ content, className, options }: Props) => {
  return (
    <div
      className={cn("prose", className)}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content || "", options),
      }}
    ></div>
  );
};

export default HtmlContent;
