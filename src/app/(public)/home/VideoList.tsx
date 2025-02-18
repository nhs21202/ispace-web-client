"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { IoPlayCircleSharp } from "react-icons/io5";
import React from "react";
import { videos } from "@/mocks/videos";
import ComponentTitle from "./ComponentTitle";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="py-10 ">
      <ComponentTitle title ="HOẠT ĐỘNG NỔI BẬT"/>
      <div className="bg-primary mt-5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 py-10 container mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={() => setSelectedVideo(video.link)}
          >
            <img
              src={video.thumbnail}
              alt={`Video ${video.id}`}
              className="h-52 w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <IoPlayCircleSharp className="text-[80px] text-white opacity-90 transition-all duration-300 hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
      </div>
      

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] max-w-4xl">
            <button
              className="absolute right-2 top-2 text-3xl text-white hover:text-gray-300"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <ReactPlayer
              url={selectedVideo}
              playing
              controls
              width="100%"
              height="500px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList;
