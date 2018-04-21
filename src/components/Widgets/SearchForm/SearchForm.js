import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      place: "",
      location: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState ({
      [name]: value
    })   
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place, location } = this.state;
    this.props.onSearch(place, location);
  }

  render() {
    return (
      <form action="">
        <input type="text" name="place" onChange={this.handleChange} value={this.place} className="place" placeholder="I'm looking for" />
        <input type="text" name="location" onChange={this.handleChange} value={this.location} className="location" placeholder="Location" />
        <button onClick={this.handleSubmit} ><img src="/image/search.png" alt="search icon" /></button>
      </form>
    )
  }
}

export default SearchForm;