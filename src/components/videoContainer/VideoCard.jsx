import React, { useEffect, useState } from "react";
import { convertViews } from "../../utils/temp";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className=" h-[300px]  w-full sm:w-[370px] text-white">
      <Link to={`/video/${video?.videoId}`}>
        <div className="h-[60%] mb-2">
          <img
            src={`${mouseOver
                ? video?.movingThumbnails?.[0]?.url
                : video?.thumbnails[0]?.url
              }`}
            alt="thumbnail"
            className="h-full w-full object-cover rounded-lg"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          />
        </div>
        <div className="flex gap-3 px-3">
          <img
            src={video?.author.avatar[0]?.url}
            alt=""
            className="rounded-full h-[40px] object-cover"
          />

          <div className="flex flex-col">
            <h1 className="font-semibold">
              {" "}
              {video?.title && video.title.length > 77
                ? `${video.title?.toString().slice(0, 60)}...`
                : video?.title}
            </h1>
            <h4 className="text-sm text-gray-500 font-semibold">
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
              <span>{video?.publishedTimeText}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
