import { cn } from "@/utilities/helper/common.helper";
import React, { ReactNode } from "react";

type Props = {
  text?: ReactNode;
  className?: string;
};

const BlockPlaceholder = ({ text = "text", className }: Props) => {
  return (
    <div
      className={cn(
        "grid h-10 w-10 place-items-center rounded bg-slate-200",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default BlockPlaceholder;
