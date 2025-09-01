import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" poster="/poster.jpg" src="/bg-video.mp4" autoPlay loop muted/>
    </div>
  );
};

export default Video;
