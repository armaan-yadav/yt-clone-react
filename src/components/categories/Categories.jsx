import React, { useContext } from "react";
import { categories } from "../../utils/data";
import { Context } from "../../context/contextApi";
import Carousel from "react-bootstrap/Carousel";
const Categories = () => {
  const { category, searchResults, setCategory, setIsLoading } =
    useContext(Context);

  return (
    <div className="w-[100%] h-[40px] bg-black fixed flex items-center gap-2 px-6">
      {categories.map((item, index) => (
        <button
          className={`text-md  px-2 rounded-md text-nowrap ${
            category == item
              ? `text-[#3c3c3c] bg-white`
              : `text-white bg-[#3c3c3c]`
          }`}
          key={index}
          onClick={() => {
            setIsLoading(true);
            setCategory(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
