"use client";
import { useEffect, useState } from "react";
import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { twMerge } from "tailwind-merge";
import { IoPlayCircleSharp } from "react-icons/io5";

type Props = {
  wrapClassName?: string;
  playerWidth?: number | string;
  playerHeight?: number | string;
} & ReactPlayerProps;

const Player = ({
  wrapClassName = "",
  playerHeight,
  playerWidth,
  playIcon = <IoPlayCircleSharp className="text-[150px] text-white" />,
  ...otherProps
}: Props) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={twMerge("relative w-full", wrapClassName)}>
      {hasWindow && (
        <ReactPlayer
          width={playerWidth || "100%"}
          height={playerHeight || "100%"}
          controls={true}
          playIcon={playIcon}
          playing={true}
          {...otherProps}
        />
      )}
    </div>
  );
};

export default Player;
