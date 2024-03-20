import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../../context/contextApi";
import VideoCardShimmer from "../shimmer/VideoCardShimmer";
import Categories from "../categories/Categories";

const VideoContainer = () => {
  const { searchResults, isLoading } = useContext(Context);

  return isLoading ? (
    <div className="h-[100vh] bg-black w-full text-white grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 relative lg:pl-[70px] pt-[70px] gap-4 overflow-hidden">
      <div className="w-[100%] h-[40px] bg-black fixed  items-center gap-3 hidden lg:flex">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              className={`h-[25px] ${index % 2 == 0 ? `w-[65px]` : `w-[45px]`
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
    <div className="h-[100vh] bg-black w-full overflow-y-auto pt-[70px] overflow-hidden flex flex-col gap-4 px-4 
    lg:pl-[80px]">
      <Categories />
      <div className=" grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2  relative ">
        {searchResults?.map((video, index) => (
          <VideoCard video={video.video} key={index} />
        ))}
      </div >
    </div>
  );
};

export default VideoContainer;
