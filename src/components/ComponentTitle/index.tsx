import { cn } from "@/utilities/helper/common.helper";
import React from "react";

type Props = {
  title: string;
  className?: string;
};
const ComponentTitle = ({ title, className }: Props) => {
  return (
    <h1
      className={cn(
        "flex items-center justify-center font-sans text-3xl font-bold uppercase text-primary",
        className,
      )}
    >
      {title}
    </h1>
  );
};

export default ComponentTitle;
