import React from 'react';
import videoListItem from './video-list-item';

const VideoList = (props) => {

  const videoItems=props.videos.map((video) => {
    return <videoListItem key={video.etag} video={video} />
  });
  return(
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;
