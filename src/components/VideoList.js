import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videolist, onSelectVideo }) => {
  const video = videolist.map(video => {
    return (
      <VideoItem
        onSelectVideo={onSelectVideo}
        key={video.snippet.title}
        video={video}
      />
    );
  });
  return (
    <div className="row">
      <div className="col-md-12">{video}</div>
    </div>
  );
};

export default VideoList;
