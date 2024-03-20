import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className=" h-[300px] w-[100%] ">
      <div className="h-[60%] mb-2">
        <div className="h-full w-full bg-slate-500 gradient-background"></div>
      </div>

      <div className="flex row w-full gap-5">
        <div className="rounded-full h-[40px] w-[40px] bg-slate-800 gradient-background"></div>
        <div className="w-full flex flex-col gap-3 flex-1">
          <h1 className="font-semibold w-[70%] h-[22px] bg-slate-500 gradient-background"></h1>
          <h1 className="font-semibold w-[50%] h-[22px] bg-slate-500 gradient-background"></h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
