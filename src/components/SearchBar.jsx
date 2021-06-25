import React from 'react';

class SearchBar extends React.Component {

  render() {

    return (
      <form className="form">
      <input className="input" type="text" placeholder="Search"/>
      <button className="button" type="submit">Submit</button>
    </form>
   );
  }
}

export default SearchBar;
