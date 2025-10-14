import { useState } from "react";
import "../../styles/App.css";

function App() {
  
  //Media to work with:
  const VIDEOS = {
    fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
    slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
    cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
    eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
  };

  return (
    <>
      <h1>Video Player</h1>
      <video
        src={VIDEOS.slow}
        controls
        autostart
        autoPlay
        muted
      ></video>
    </>
  );
}

export default App;
