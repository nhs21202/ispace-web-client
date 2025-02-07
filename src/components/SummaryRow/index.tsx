import { cn } from "@/utilities/helper/common.helper";
import React from "react";

type Props = { label?: React.ReactNode; value?: string; className?: string };

const SummaryRow = ({ label, value, className }: Props) => {
  return (
    <div className={cn("flex justify-between gap-3", className)}>
      <div>{label ? label : ""}</div>
      <p className="flex-shrink-0">{value}</p>
    </div>
  );
};

export default SummaryRow;
