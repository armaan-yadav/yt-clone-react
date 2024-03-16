import React, { useContext } from "react";
import { leftSidebarData } from "../utils/data";
import LeftSidebarFull from "./LeftSidebarFull";
import { Context } from "../context/contextApi";

const LeftSidebar = () => {
  const { setCategory } = useContext(Context);

  return (
    <>
      <div className=" w-[70px] h-[calc(100vh-56px)] bg-black text-white  flex-col gap-5 items-center justify-start py-4 inline-flex">
        {leftSidebarData.map((item) => (
          <div
            className="text-[.7rem] flex flex-col items-center "
            key={item.name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
              onClick={() => setCategory(item.name.toLowerCase())}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.path}
              />
            </svg>
            {item.name}
          </div>
        ))}
      </div>
      <LeftSidebarFull />
    </>
  );
};

export default LeftSidebar;
