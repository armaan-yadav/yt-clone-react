import React from "react";
import { timeDifferenceFromCurrent } from "../../utils/temp";

const VideoDescription = ({ videoDetails, setShowFullDesc, showFullDesc }) => {
  return (
    <div className="description bg-[#282828] w-full rounded-xl p-2 text-sm ">
      <div className="flex gap-4 text-md">
        <span>{videoDetails.stats.views} views</span>
        <span>{timeDifferenceFromCurrent(videoDetails.publishedDate)}</span>
      </div>
      <p>
        {showFullDesc
          ? videoDetails.description
          : videoDetails.description.slice(0, 200)}
        <button
          onClick={() => setShowFullDesc(!showFullDesc)}
          className="font-semibold shadow-md"
        >
          {showFullDesc ? "show less" : "...show more"}
        </button>
      </p>
    </div>
  );
};

export default VideoDescription;
