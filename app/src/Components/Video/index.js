import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './SearchBarForm';
import VideoList from './VideoList';
import VideoPlayer from './VideoDisplay'
import "./style.css"
// import YouTube from 'react-youtube';

import ListOfingredients from '../Ingredients';

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

  render() {
    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: { // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1
    //     }
    //   };
    return (
     
       
        <div className="container">
          <SearchBar
            onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}
            />
{/* 
<YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      /> */}
        </div>
      
    );
  }

}

export default Video;