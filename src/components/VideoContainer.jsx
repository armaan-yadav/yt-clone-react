import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../context/contextApi";
import VideoCardShimmer from "./shimmer/VideoCardShimmer";

const VideoContainer = () => {
  const { searchResults } = useContext(Context);

  return searchResults.length == 0 ? (
    <div className="-[calc(100vh-56px)] bg-black w-full text-white grid grid-cols-3">
      {Array(8)
        .fill("")
        .map((e) => (
          <VideoCardShimmer />
        ))}
    </div>
  ) : (
    <div className="h-[calc(100vh-56px)] bg-black w-full grid grid-cols-3 overflow-y-auto">
      {searchResults?.map((video, index) => (
        <VideoCard video={video.video} key={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
