import React, { Component } from 'react';


class SearchBarForm extends Component {
  constructor(props) {
    super(props);

   this.state = { term: " " };
  }

  onInputChange(term) {
    this.setState({ term:term});
    this.props.onChange(term);
  }

  componentDidMount() {
    this.setState({ term:this.props.youtubeSearchName + " recipe"},()=>{
      this.onInputChange(this.state.term);
    });
    
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => {
            this.onInputChange(event.target.value)
          }}
          placeholder='Search Video'
        />
      </div>
    );
  }
}

export default SearchBarForm;