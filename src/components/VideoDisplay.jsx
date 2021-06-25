import React from 'react';

const VideoDisplay = (props) => {

  return (
    <div className="video-display">
        <iframe className="video" src="https://www.youtube.com/embed/DZMqsMHg8Ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );

};

export default VideoDisplay;
