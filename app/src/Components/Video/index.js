import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBarForm from './SearchBarForm';
import VideoList from './VideoList';
import VideoPlayer from './VideoDisplay'
import "./style.css"

const YT_API = "AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      youtubeSearchName: props.youtubeSearchName
    };

    this.searchYoutube(" ");
  }

  videoSearch = _.debounce((term) => { 
    this.searchYoutube(term) 
  }, 300);

  searchYoutube(term) {
    console.log("term---", term);
    YTSearch({ key: YT_API, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  componentDidMount() {
    console.log("this should be the name from the video component" + this.state.youtubeSearchName);
  }

  render() {
    return (
        <div className="container">
          <SearchBarForm
            onChange={(searchTerm) => {this.videoSearch(searchTerm)}} 
            youtubeSearchName={this.props.youtubeSearchName} />
          <VideoPlayer video={this.state.selectedVideo}  />
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}
            />
        </div>
    );
  }

}

export default Video;