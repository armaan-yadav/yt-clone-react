import React, { useContext, useEffect, useRef, useState } from "react";
import { getVideoComments } from "../../../utils/api";
import VideoComment from "./VideoComment";
import { Context } from "../../../context/contextApi";
import { useParams } from "react-router-dom";
import loading from "../../../../public/assets/loading.svg";
export const VideoCommentsContainer = ({ videoId }) => {
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(Context);
  const [videoCommentsObj, setVideoCommentsObj] = useState({});
  const [cursorNext, setCursorNext] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getVideoComments(videoId).then((e) => {
      setVideoCommentsObj(e);
      setCursorNext(e.cursorNext);
      setCommentsList(e.comments);
    });
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1 &&
        !isLoadingMore
      ) {
        setIsLoadingMore(true);
        await getVideoComments(id, cursorNext).then((e) => {
          setVideoCommentsObj(e);
          setCursorNext(e.cursorNext);
          setCommentsList((prev) => [...prev, ...e.comments]);
        });
        setIsLoadingMore(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isLoadingMore, cursorNext]);

  return commentsList.length === 0 && isLoading ? (
    <div className="w-full flex  justify-center ">
      <img src={loading} alt="" className="h-[50px]" />
    </div>
  ) : videoCommentsObj.error ? (
    <div>comments are turned off</div>
  ) : (
    <div className="w-full my-3 overflow-auto">
      <h1 className="text-xl font-semibold">
        {videoCommentsObj?.totalCommentsCount} comments
      </h1>
      {commentsList?.map(
        (e, index) =>
          e.content !== null && <VideoComment comment={e} key={index} />
      )}
      {isLoadingMore && (
        <div className="w-full flex  justify-center ">
          <img src={loading} alt="" className="h-[50px]" />
        </div>
      )}
    </div>
  );
};

export default VideoCommentsContainer;
