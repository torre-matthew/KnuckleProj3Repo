import React from 'react';
import VideoListItem from './VideoListItems'

const VideoList = ({videos, onVideoSelect}) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={ onVideoSelect }
        key={video.etag}
        video={video}
      />
  );
  });

  return (
    <div className="pp-foh-list row container">
    <ul className="col s12 m4 l8 list-group">
      { videoItems }
    </ul>
    </div>
  );
}

export default VideoList;   