import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { getVideoDetails } from "../../utils/api";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoAuthor from "./VideoAuthor";
import VideoComments from "./videoComments/VideoCommentsContainer";
import VideoSuggestionsContainer from "./videoSuggestions/VideoSuggestionsContainer";
import LeftSidebarFull from "../sidebar/LeftSidebarFull";
import VideoDetailsShimmer from "../shimmer/VideoDetailsShimmer";

const VideoDetails = () => {
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoDetails, setVideoDetails] = useState();
  const { isLoading, setIsLoading } = useContext(Context);
  useEffect(() => {
    setIsLoading(true);
    getVideoDetails(id).then((response) => {
      setVideoDetails(response);
      setIsLoading(false);
    });
    setTimeout(() => {
      setIsMuted(false);
      setIsPlaying(true);
    }, 2000);
  }, [id]);

  return !videoDetails ? (
    <VideoDetailsShimmer />
  ) : (
    <>
      <div className="w-full bg-black text-white lg:px-10 pt-[70px] flex gap-6  flex-col lg:flex-row ">
        <div className="main-video  lg:max-w-[65%] lg:min-w-[65%] h-full">
          <VideoPlayer videoId={videoDetails.videoId} isPLaying={isPlaying} />
          <h1 className="text-xl font-bold my-2 px-1">{videoDetails.title}</h1>
          <div className="px-1">
            <VideoAuthor videoDetails={videoDetails} />
          </div>
          <VideoDescription
            setShowFullDesc={setShowFullDesc}
            showFullDesc={showFullDesc}
            videoDetails={videoDetails}
          />
          {
            window.innerWidth <= 480 &&
            <VideoSuggestionsContainer videoId={videoDetails.videoId} />

          }
          <VideoComments videoId={videoDetails?.videoId} />
        </div>
        {
          window.innerWidth > 480 &&
          <VideoSuggestionsContainer videoId={videoDetails.videoId} />

        }
      </div>
      <LeftSidebarFull /></>
  );
};

export default VideoDetails;
