import { createContext, useEffect, useState } from "react";
import { getVideos } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("New");
  const [shoeSideMenu, setShowSideMenu] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getVideos(category).then((response) => setSearchResults(response.contents));
    setIsLoading(false);
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
