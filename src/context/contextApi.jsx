import { createContext, useEffect, useState } from "react";
import { getVideos } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [category, setCategory] = useState("New");
  const [shoeSideMenu, setShowSideMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Home")
  useEffect(() => {
    setIsLoading(true);
    getVideos(category)
      .then((response) => setSearchResults(response.contents))
      .then(() => {
        setIsLoading(false);
      });
  }, [category]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        searchResults,
        setSearchResults,
        category,
        setCategory,
        shoeSideMenu,
        setShowSideMenu,
        activeCategory,
        setActiveCategory
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
