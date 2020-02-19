import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }
  const VideoSrc = `https://www.youtube.com/embed/$(videi.id.videoId)`;
  return (
    <div className="card p-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={VideoSrc}></iframe>
      </div>
      <h5>{video.snippet.title}</h5>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
