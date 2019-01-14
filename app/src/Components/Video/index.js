import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBarForm';
import VideoList from './VideoList';
import VideoPlayer from './VideoDisplay'
import "./style.css"

const YT_API = "AIzaSyAson-jfu7sHopOIhJ3NGOqJI-khuXm4-M";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchYoutube('');
  }

  videoSearch = _.debounce((term) => { this.searchYoutube(term) }, 300);

  searchYoutube(term) {
    YTSearch({ key: YT_API, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(props) {
    return (
        <div className="container">
          <SearchBar
            onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}
            />
        </div>
    );
  }

}

export default Video;