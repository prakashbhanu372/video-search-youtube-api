import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <React.Fragment>
      <div
        className="d-flex"
        onClick={() => onSelectVideo(video)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="img-fluid"
        />
        {video.snippet.title}
      </div>
    </React.Fragment>
  );
};

export default VideoItem;
