import { useState } from "react";
import "../../styles/App.css";
import Menu from "../Presentationals/Menu";
import Video from "../Presentationals/Video";

function App() {
  //Media to work with:
  const VIDEOS = {
    fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
    slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
    cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
    eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
  };

  //State Variable and Setter function:
  const [src, setSrc] = useState(null);

  //function to update the state:
  function clickHandler(value){
    setSrc(VIDEOS[value])
  }

  return (
    <div style={{backgroundColor:'pink', borderRadius:10}}>
      <h1>Video Player</h1>
      <p>
        The focus of this app is to use a Programming Pattern for cleaner,
        reusable and flexible code.
      </p>
      <Menu onSelect={clickHandler}/>
        
      {src ? <Video src={src}/> : null}
      
    </div>
  );
}

export default App;
