import React, { useContext, useState } from "react";
import { leftSidebarData } from "../../utils/data";
import LeftSidebarFull from "./LeftSidebarFull";
import { Context } from "../../context/contextApi";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {
  const { setCategory, setActiveCategory, activeCategory } = useContext(Context);

  const navigate = useNavigate()
  return (
    <>
      <div className=" w-[70px] h-full bg-black text-white  flex-col gap-5 items-center justify-start py-4 hidden sm:inline-flex pt-[66px] fixed">
        {leftSidebarData.map((item) => (
          <div
            className={`text-[.7rem] flex flex-col items-center w-full cursor-pointer ${activeCategory == item.name && `bg-white text-black`
              }`}
            key={item.name}
            onClick={() => {
              setCategory(item.name);
              setActiveCategory(item.name);
              navigate("/")

            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
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
      <LeftSidebarFull

      />
    </>
  );
};

export default LeftSidebar;
