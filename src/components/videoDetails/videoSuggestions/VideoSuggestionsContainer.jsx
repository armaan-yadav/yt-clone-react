import React, { useEffect, useState } from "react";
import { getSuggestedVideos } from "../../../utils/api";
import VideoSuggestionCard from "./VideoSuggestionCard";

const VideoSuggestionsContainer = ({ videoId }) => {
  const [videoSuggestionsObj, setVideoSuggestionsObj] = useState({});
  const [suggestedVideoList, setSuggestedVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(suggestedVideoList);

  useEffect(() => {
    setIsLoading(true);
    console.log(isLoading);
    getSuggestedVideos(videoId).then((e) => {
      setVideoSuggestionsObj(e);
      setSuggestedVideosList(e.contents);
      setIsLoading(false);
    });
  }, []);
  return suggestedVideoList.length === 0 && isLoading ? (
    <div>loading</div>
  ) : (
    <div className="flex flex-col gap-4">
      {suggestedVideoList.map((video) => (
        <VideoSuggestionCard video={video.video} key={video.video.videoId} />
      ))}
    </div>
  );
};

export default VideoSuggestionsContainer;
