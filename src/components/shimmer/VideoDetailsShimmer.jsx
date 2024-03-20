import React from 'react'

const VideoDetailsShimmer = () => {
    return (
        <div className='w-full bg-black h-[100vh] pt-[70px] flex flex-col gap-3 px-2 '>
            <div className='lg:w-[65%] flex flex-col  gap-3'>
                <div className="lg:h-[400px] h-[250px]  w-full  rounded-xl overflow-hidden gradient-background"></div>
                <h1 className='h-[30px] w-100% gradient-background rounded-md'></h1>
                <h1 className='h-[30px] w-100% gradient-background rounded-md'></h1>
                <div className="flex gap-2 items-center">
                    <div className="h-[50px] w-[50px] gradient-background rounded-full"></div>
                    <div className='flex flex-col gap-1'>
                        <div className="h-[20px] w-[200px] gradient-background"></div>
                        <div className="h-[20px] w-[100px] gradient-background"></div>
                    </div>
                </div></div>
        </div>
    )
}

export default VideoDetailsShimmer