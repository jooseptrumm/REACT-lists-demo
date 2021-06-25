import React from 'react';

class SearchBar extends React.Component {

  state = {term: ""};

  onChange = (event) => {
    this.setState({term: event.target.value});
    console.log(this.state);
  }

  render() {

    return (
      <form className="form">
      <input className="input" type="text" placeholder="Search" value={this.state.term} onChange={this.onChange}/>
      <button className="button" type="submit">Submit</button>
    </form>
   );
  }
}

export default SearchBar;
