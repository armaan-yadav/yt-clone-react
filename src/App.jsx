import React from "react";
import { AppContext } from "./context/contextApi";
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import VideoContainer from "./components/videoContainer/VideoContainer";
import { Route, Routes } from "react-router-dom";
import VideoDetails from "./components/videoDetails/VideoDetails";
import VideoSearchContainer from "./components/videoSearch/VideoSearchContainer";

const App = () => {
  return (
    <AppContext>
      <div className="min-h-[100vh] max-w-[100vw] bg-black relative">
        <Navbar />
        <div className="flex h-full">
          <Routes>
            <Route
              index
              element={
                <>
                  <LeftSidebar />
                  <VideoContainer />
                </>
              }
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/search/:searchValue" element=
              {
                <>
                  <LeftSidebar />
                  <VideoSearchContainer />
                </>
              }
            />
          </Routes>
        </div>
      </div>

    </AppContext>
  );
};

export default App;
