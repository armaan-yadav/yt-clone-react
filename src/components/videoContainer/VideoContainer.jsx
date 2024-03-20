import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../../context/contextApi";
import VideoCardShimmer from "../shimmer/VideoCardShimmer";
import Categories from "../categories/Categories";
import { getNextVideos } from "../../utils/api";

const VideoContainer = () => {
  const { searchResults, isLoading, category } = useContext(Context);
  const [searchResultsList, setSearchResultsList] = useState([])
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [cursorNext, setCursorNext] = useState("")
  console.log(searchResultsList)
  useEffect(() => {
    setSearchResultsList(searchResults?.contents)
    setCursorNext(searchResults?.cursorNext)
  }, [searchResults])

  useEffect(() => {
    const handleScroll = async () => {
      console.log("hh")
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1 &&
        !isLoading
      ) {
        setIsLoadingMore(true);
        await getNextVideos(searchValue, cursorNext).then((e) => {
          console.log("first")
          setCursorNext(e.cursorNext)
          setSearchResultsList(prev => [...prev, ...e.contents])
          setIsLoadingMore(false);
        });
      }
    };
    console.log("first")
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [cursorNext]);
  return isLoading ? (
    <div className="h-[100vh] bg-black w-full text-white grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 relative lg:pl-[70px] pt-[70px] gap-4 overflow-hidden">
      <div className="w-[100%] h-[40px] bg-black fixed  items-center gap-3 hidden lg:flex">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              className={`h-[25px] ${index % 2 == 0 ? `w-[65px]` : `w-[45px]`
                } bg-[#3c3c3c] gradient-background rounded-md`}
              key={index}
            ></div>
          ))}
      </div>
      {Array(6)
        .fill("")
        .map((e, index) => (
          <VideoCardShimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="h-[100vh] bg-black w-full overflow-y-auto pt-[70px] overflow-hidden flex flex-col gap-4 px-4 
    lg:pl-[80px]">
      <Categories />
      <div className=" grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2  relative ">
        {searchResultsList?.map((video, index) => (
          <VideoCard video={video.video} key={index} />
        ))}
      </div >
    </div>
  );
};

export default VideoContainer;
