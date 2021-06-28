// Import the React framework.

import React from 'react';

// Create the VideoDisplay component.

const VideoDisplay = (props) => {

  // Render the component.

  return (<div className="video-display">
    <iframe className="video" src={props.embedCode} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
  </div>);

};

// Export the component.

export default VideoDisplay;
