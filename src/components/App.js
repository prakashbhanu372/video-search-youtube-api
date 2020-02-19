import React, { Component } from "react";
import youtube, { baseParams } from "../apis/youtube";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends Component {
  state = {
    VideoList: [],
    SelectedVideo: null
  };
  onSerachSubmit = term => {
    youtube
      .get("/search", {
        params: {
          ...baseParams,
          q: term
        }
      })
      .then(res => {
        //console.log(res);
        this.setState({ VideoList: res.data.items });
      })
      .catch(error => {
        return error;
      });
  };
  onSelectedVideo = video => {
    this.setState({ SelectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <Searchbar onchange={this.onSerachSubmit} />
        <VideoDetail video={this.state.SelectedVideo} />
        <VideoList
          onSelectVideo={this.onSelectedVideo}
          videolist={this.state.VideoList}
        />
      </div>
    );
  }
}

export default App;
