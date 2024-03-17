import React, { useEffect, useState } from "react";
import { getSuggestedVideos } from "../../../utils/api";

const VideoSuggestionsContainer = ({ videoId }) => {
  const [videoSuggestionsObj, setVideoSuggestionsObj] = useState({});
  const [suggestedVideoList, setSuggestedVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(videoSuggestionsObj);

  useEffect(() => {
    setIsLoading(true);
    getSuggestedVideos(videoId).then((e) => {
      setVideoSuggestionsObj(e);
    });
    setIsLoading(false);
  }, []);
  return <div>VideoSuggestions</div>;
};

export default VideoSuggestionsContainer;
