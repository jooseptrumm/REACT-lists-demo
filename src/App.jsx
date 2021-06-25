import React from 'react';

import SearchBar from './components/SearchBar.jsx';
import ScrollBar from './components/ScrollBar.jsx';
import VideoDisplay from './components/VideoDisplay.jsx';
import VideoList from './components/VideoList.jsx';

class App extends React.Component {

  render() {

    return (
      <div className="page">
      <div className="header">
        <SearchBar/>
      </div>
      <VideoDisplay/>
      <VideoList/>
    </div>
  );
  }

}

export default App;
