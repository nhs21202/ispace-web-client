import { cn } from "@/utilities/helper/common.helper";
import React from "react";

type Props = {
  theme: "basic" | "pulse" | "pulse-with-text";
  icon?: React.ReactNode;
  text?: string;
  iconColor?: string;
  textColor?: string;
};

const ContactIcon = ({
  theme,
  text,
  icon,
  iconColor,
  textColor,
}: Props) => {
  return (
    <div
      className="flex h-14 items-center justify-center rounded-full"
      style={{
        backgroundColor: iconColor,
        color: textColor,
      }}
    >
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full"
        style={{
          backgroundColor: iconColor,
          color: textColor,
        }}
      >
        <div
          className={cn("h-10 w-10 animate-ping rounded-full", {
            hidden: theme === "basic",
          })}
          style={{
            backgroundColor: iconColor,
            color: textColor,
          }}
        />
        <div className="absolute inset-0 flex h-14 w-14 items-center justify-center rounded-full">
          {icon}
        </div>
      </div>
      <div
        className={cn(
          "z-10 flex h-14 w-fit items-center justify-center rounded-full pr-3",
          { hidden: theme !== "pulse-with-text" },
        )}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ContactIcon;
