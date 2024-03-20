import React from 'react'
import { Link } from 'react-router-dom'
import { convertViews } from '../../utils/temp'

const VideoSearchCard = ({ video }) => {

    return (
        <div className="h-[210px]   w-[100%] text-white  flex flex-col ">
            <Link to={`/video/${video?.videoId}`} className='flex  gap-4'>
                <div className="lg:max-w-[360px] lg:min-w-[360px] lg:h-[100%] mb-2 ">
                    <img
                        src={video.thumbnails?.[0].url}
                        alt="thumbnail"
                        className="h-full w-full object-cover rounded-lg"

                    />
                </div>
                <div className='flex flex-col gap-2.5 text-[#aaa]'>
                    <h1 className="font-semibold text-lg text-white">
                        {" "}
                        {video?.title && video.title.length > 90
                            ? `${video.title?.toString().slice(0, 60)}...`
                            : video?.title}
                    </h1>
                    <p className="w-full text-gray-500 flex items-center gap-1 text-[13px] font-semibold">
                        {convertViews(video?.stats?.views)}
                        <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-1 "
                            fill="currentColor"
                        >
                            <circle cx="50" cy="50" r="50" />
                        </svg>
                        <span>{video?.publishedTimeText}</span>
                    </p>

                    <div className='flex gap-2 items-center'>
                        <img
                            src={video?.author.avatar[0]?.url}
                            alt=""
                            className="rounded-full h-[35px] object-cover"
                        />
                        <h4 className="text-sm text-gray-500 font-semibold">
                            {video?.author?.title}
                        </h4>
                    </div>
                    <p className='text-sm w-full '>{video?.descriptionSnippet}</p>
                </div>
            </Link >
        </div >
    )
}

export default VideoSearchCard