import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId, isPlaying }) => {
  return (
    <div className="player h-[400px] max-w-[ ] w-full rounded-xl overflow-hidden">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        playing={isPlaying}
        controls={true}
        height={"100%"}
        width={"100%"}
        autoPlay
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
