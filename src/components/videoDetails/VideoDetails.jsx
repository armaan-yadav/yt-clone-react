import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { getVideoDetails } from "../../utils/api";
import VideoPlayer from "./VideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoAuthor from "./VideoAuthor";
import VideoComments from "./videoComments/VideoCommentsContainer";
import VideoSuggestionsContainer from "./videoSuggestions/VideoSuggestionsContainer";

const VideoDetails = () => {
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoDetails, setVideoDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

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

  return !videoDetails ? (
    <div>loading</div>
  ) : (
    <div className="w-full bg-black text-white px-10 pt-7 flex gap-6">
      <div className="main-video  min-w-[65%] h-full">
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
      <VideoSuggestionsContainer videoId={videoDetails.videoId} />
    </div>
  );
};

export default VideoDetails;
