function Video({src}) {
  return (
    <div>
      <video src={src} controls autostart autoPlay muted loop/>
    </div>
  );
}

export default Video;
