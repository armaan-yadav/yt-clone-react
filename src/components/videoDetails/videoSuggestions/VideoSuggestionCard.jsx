import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { convertViews } from "../../../utils/temp";
import { Context } from "../../../context/contextApi";
const VideoSuggestionCard = ({ video }) => {
  const { setLoading } = useContext(Context);
  return (
    <div className=" h-[95px]  w-full sm:w-[370px] text-white ">
      <Link
        to={`/video/${video?.videoId}`}
        className="flex"
        onClick={() => {
          setLoading(true);
        }}
      >
        <div className="h-[94px] min-w-[164px] mb-2 ">
          <img
            src={video.thumbnails?.[0]?.url}
            alt="thumbnail"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="flex gap-3 px-3">
          <div className="flex flex-col">
            <h1 className="font-semibold text-[.95rem]">
              {video.title && video.title.length > 2
                ? `${video.title?.toString().slice(0, 35)}...`
                : video.title}
            </h1>
            <h4 className="text-[.8rem] text-gray-500 font-semibold">
              {video?.author?.title}
            </h4>
            <p className="w-full text-gray-500 flex items-center gap-1 text-[14px] font-semibold">
              {convertViews(video?.stats?.views)}

              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="h-1 "
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
              <span className="text-[.8rem]">{video?.publishedTimeText}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoSuggestionCard;
