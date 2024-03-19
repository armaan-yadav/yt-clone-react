import React, { useContext, useEffect, useState } from "react";
import { getSuggestedVideos } from "../../../utils/api";
import VideoSuggestionCard from "./VideoSuggestionCard";
import { useParams } from "react-router-dom";
import { Context } from "../../../context/contextApi";

const VideoSuggestionsContainer = ({ videoId }) => {
  const { id } = useParams();
  const [videoSuggestionsObj, setVideoSuggestionsObj] = useState({});
  const [suggestedVideoList, setSuggestedVideosList] = useState([]);
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const { isLoading, setIsLoading } = useContext(Context);

  useEffect(() => {
    setIsLoadingLocal(true);
    getSuggestedVideos(id).then((e) => {
      setVideoSuggestionsObj(e);
      setSuggestedVideosList(e.contents ? e.contents : []);
      setIsLoadingLocal(false);
    });
  }, []);
  return suggestedVideoList.length === 0 && isLoadingLocal ? (
    <div>loading</div>
  ) : (
    <div className="flex flex-col gap-4">
      {suggestedVideoList.map((video, index) => (
        <VideoSuggestionCard
          video={video.video}
          key={video.video.videoId ? video.video.videoId : index}
        />
      ))}
    </div>
  );
};

export default VideoSuggestionsContainer;
