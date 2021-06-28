// Import the React framework.

import React from 'react';

// Create the SearchBar component.

class SearchBar extends React.Component {

  // Initialize the component state.

  state = {
    term: ""
  };

  // Method for updating the input value on input change.

  onChange = (event) => {

    // Update the component state with the value that is being typed into the input.

    this.setState({term: event.target.value});
  }

  // Method for submitting a search term.

  onSubmit = (event) => {

    // Prevent the page from reloading.

    event.preventDefault();

    // Update the component state with the provided search term.

    this.props.makeRequest(this.state.term);
  }

  // Render the SearchBar component.

  render() {

    return (<form className="form" onSubmit={this.onSubmit}>
      <input className="input" type="text" placeholder="Search for videos on Youtube" value={this.state.term} onChange={this.onChange}/>
      <button className="button" type="submit">Search</button>
    </form>);
  }
}

// Export the SearchBar component.

export default SearchBar;
