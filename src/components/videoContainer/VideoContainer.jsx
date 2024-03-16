import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../../context/contextApi";
import VideoCardShimmer from "../shimmer/VideoCardShimmer";
import Categories from "../categories/Categories";

const VideoContainer = () => {
  const { searchResults, isLoading } = useContext(Context);
  console.log(isLoading);

  return isLoading ? (
    <div className="h-[calc(100vh-56px)] bg-black w-full text-white grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 relative">
      <div className="w-[100%] h-[40px] bg-black fixed flex items-center gap-2">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              className={`h-[25px] ${
                index % 2 == 0 ? `w-[65px]` : `w-[45px]`
              } bg-[#3c3c3c] gradient-background rounded-md`}
              key={index}
            ></div>
          ))}
      </div>
      {Array(6)
        .fill("")
        .map((e, index) => (
          <VideoCardShimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="h-[calc(100vh-56px)] bg-black w-full grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 overflow-y-auto relative pt-[50px]">
      <Categories />
      {searchResults?.map((video, index) => (
        <VideoCard video={video.video} key={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
