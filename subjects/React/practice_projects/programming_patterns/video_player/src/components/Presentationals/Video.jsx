import { useState } from "react";

const showVideoStyles ={
  marginTop: '1rem',
  border: '2px solid',
  borderRadius: '5px',
  paddingTop: '.4rem'
}
const showErrorStyles ={
    fontSize: '1.5rem'
}

function Video({ src }) {
  //State to manage video loading errors
  const [hasError, setHasError] = useState(false);

  //Resets the error status on selecting a new video (when src changes):
  function handleLoadStart() {
    setHasError(false);
  }

  //Set error state to truthy on loading error:
  function handleLoadError() {
    setHasError(true);
  }

  //Variable holding JSX for error state.
  const showError = (
    <div className="video-error" style={showErrorStyles}>
      <p>Sorry, this video failed to load.</p>
      <p>Please try selecting a different video.</p>
    </div>
  );

  //Variable holding JSX for success state (no errors).
  const showVideo = (
    <div style={showVideoStyles}>
      <video
        src={src}
        onLoadStart={handleLoadStart}
        onError={handleLoadError}
        controls
        autostart
        autoPlay
        muted
        loop
      />
    </div>
  );

  //Check for errors and display the JSX as appropriate:
  return hasError ? showError : showVideo;
}

export default Video;
