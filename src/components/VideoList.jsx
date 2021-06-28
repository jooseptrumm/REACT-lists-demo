// Import the React framework.

import React from 'react';

// Create the VideoList component.

class VideoList extends React.Component {

  // Callback method that is evoked when the thumbnail is clicked.
  // This will call another function that has been provided by the App component as a prop.

  onClick = (event) => {

    // Call the callback function specified in the App component.

    this.props.onSelect(event.nativeEvent.target.id)
  };

  // Render a list of video thumbnails.

  render = () => {

    // Create the list that is being rendered using the props that were provided by the App component.

    const list = this.props.items.map((item) => {

      // Return an array of video thumbnails.

      return (<div className="video-list-item" key={item.id} onClick={this.onClick}>
        <button className="link" id={item.id}>
          <h2 className="title">{item.title}</h2>
          <img className="thumbnail" id={item.id} src={item.thumbnail} alt={item.description}/>
        </button>
      </div>);
    });

    // Render the list of thumbnails.

    return (<div className="video-list">
      {list}
    </div>);
  }
};

// Export the component.

export default VideoList;
