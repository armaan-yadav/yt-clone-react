import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNextVideos, getVideos } from '../../utils/api';
import VideoSearchCard from './VideoSearchCard';
import loading from "/assets/loading.svg"
const VideoSearchContainer = () => {
    const { searchValue } = useParams();
    const [searchResultsObj, setSearchResultsObj] = useState({})
    const [searchResultsList, setSearchResultsList] = useState([])
    const [cursorNext, setCursorNext] = useState("_")
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setSearchResultsList([])
        getVideos(searchValue).then(e => {
            setSearchResultsObj(e)
            setSearchResultsList(e.contents)
            setCursorNext(e.cursorNext)
            setIsLoading(false)
        })
    }, [searchValue])

    useEffect(() => {
        const handleScroll = async () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 1 &&
                !isLoading
            ) {
                setIsLoadingMore(true);
                await getNextVideos(searchValue, cursorNext).then((e) => {
                    // console.log(e);
                    setSearchResultsObj(e)
                    setCursorNext(e.cursorNext)
                    setSearchResultsList(prev => [...prev, ...e.contents])
                    setIsLoadingMore(false);
                });
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [cursorNext]);
    return isLoading && searchResultsList.length === 0 ?
        <div className='bg-black w-full text-white flex justify-center items-center'>Searchinggggggg</div>
        : (
            <div className=' text-white h-full lg:pl-[70px] w-full pt-[70px]'>
                <h1 className='mb-3'> Search Results for :  <span className='text-3xl'>{searchValue}</span></h1>
                <div className="bg-black flex flex-col gap-3 h-full">
                    {searchResultsList?.map((item, index) => {
                        return item.type == 'video' && <VideoSearchCard video={item.video} key={index} />
                    })}
                    {isLoadingMore && (
                        <div className="w-full flex  justify-center ">
                            <img src={loading} alt="" className="h-[50px]" />
                        </div>
                    )}
                </div>
            </div>
        )
}

export default VideoSearchContainer