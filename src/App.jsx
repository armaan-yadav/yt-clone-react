import React, { useEffect } from "react";
import { AppContext } from "./context/contextApi";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import VideoContainer from "./components/VideoContainer";

const App = () => {
  return (
    <AppContext>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <VideoContainer />
      </div>
    </AppContext>
  );
};

export default App;
