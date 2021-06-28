// Import the React framework.

import React from 'react';

// Import components.

import SearchBar from './components/SearchBar.jsx';
import VideoDisplay from './components/VideoDisplay.jsx';
import VideoList from './components/VideoList.jsx';

// Import custom js modules.

import {instance} from './api/axios';

// Create the App component.

class App extends React.Component {

  // Set initial state.

  state = {
    items: [],
    embedCode: null
  };

  // Method for making an axios request to the Youtube API with the provided search term.

  makeRequest = async (term) => {

    // Make a request with the specified search term and await for the response.

    const response = await instance.get("/search", {
      params: {
        q: term
      }
    });

    // Create an items array populated with data from the Youtube API responce.

    const items = response.data.items.map((item) => {
      return {id: item.id.videoId, thumbnail: item.snippet.thumbnails.high.url, title: item.snippet.title, description: item.snippet.description};
    });

    // Update the state with the items array.

    this.setState({items: items});
  }

  // Callback method for passing a youtube video id on to the VideoDisplay component when a thumbnail is being clicked.

  onThumbnailSelect = (id) => {

    // Update the state with the provided video id.

    this.setState({embedCode: `https://www.youtube.com/embed/${id}`});
  }

  // Render the App component.

  render() {

    return (<div className="page">
      <div className="header">
        <SearchBar makeRequest={this.makeRequest}/>
      </div>
      <VideoDisplay embedCode={this.state.embedCode}/>
      <VideoList items={this.state.items} onSelect={this.onThumbnailSelect}/>
    </div>);
  }
}

// Export the App component.

export default App;
