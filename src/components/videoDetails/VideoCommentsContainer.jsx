import React, { useEffect, useRef, useState } from "react";
import { getVideoComments } from "../../utils/api";
import VideoComment from "./VideoComment";

const VideoCommentsContainer = ({ videoId }) => {
  const [videoComments, setVideoComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    getVideoComments(videoId).then((e) => {
      setVideoComments(e);
    });
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("first");
  //     if (
  //       divRef.current.scrollTop + divRef.current.clientHeight >=
  //         divRef.current.scrollHeight &&
  //       !isLoading &&
  //       !isEndReached
  //     ) {
  //       console.log("first"); // Fetch more data when the bottom is reached
  //     }
  //   };
  //   divRef.current.addEventListener("scroll", handleScroll);

  //   return () => {
  //     divRef.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isLoading, isEndReached]);
  return videoComments.error ? (
    <div>comments are turned off</div>
  ) : (
    <div className="w-full my-3 overflow-auto" ref={divRef}>
      <h1 className="text-xl font-semibold">
        {videoComments?.totalCommentsCount} comments
      </h1>
      {videoComments?.comments?.map((e) => (
        <VideoComment comment={e} key={e.commentId} />
      ))}
    </div>
  );
};

export default VideoCommentsContainer;
