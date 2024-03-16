import React, { useEffect } from "react";
import { AppContext } from "./context/contextApi";
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import VideoContainer from "./components/videoContainer/VideoContainer";
import { Route, Routes } from "react-router-dom";
import VideoDetails from "./components/videoDetails/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <Navbar />
      <div className="flex">
        <Routes>
          <Route
            index
            element={
              <>
                {" "}
                <LeftSidebar />
                <VideoContainer />
              </>
            }
          />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
