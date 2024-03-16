import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { getVideoComments, getVideoDetails } from "../../utils/api";
import ReactPlayer from "react-player";
import { convertViews, timeDifferenceFromCurrent } from "../../utils/temp";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoAuthor from "./VideoAuthor";
import VideoComments from "./VideoCommentsContainer";

const VideoDetails = () => {
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoDetails, setVideoDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);
  const divRef = useRef();
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
  // }, []);
  useEffect(() => {
    setIsLoading(true);
    getVideoDetails(id).then((response) => {
      setVideoDetails(response);
    });
    setIsLoading(false);
    setTimeout(() => {
      setIsMuted(false);
      setIsPlaying(true);
    }, 2000);
  }, []);

  return !videoDetails ? <div>loading</div> : (
    <div
      className="w-full bg-black text-white px-10 min-h-screen pt-7"
      ref={divRef}
    >
      <div className="main-video  w-[60%] h-full">
        <VideoPlayer videoId={videoDetails.videoId} isPLaying={isPlaying} />
        <h1 className="text-xl font-bold my-2">{videoDetails.title}</h1>
        <div>
          <VideoAuthor videoDetails={videoDetails} />
        </div>
        <VideoDescription
          setShowFullDesc={setShowFullDesc}
          showFullDesc={showFullDesc}
          videoDetails={videoDetails}
        />
        <VideoComments videoId={videoDetails.videoId} />
      </div>
      <div className="suggested-videos"></div>
    </div>
  );
};

export default VideoDetails;
