import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchVenues } from "../../../actions/venues";
import { withRouter } from "react-router";
class SearchForm extends Component {

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState ({
      [name]: value
    })   
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place, location } = this.state;
    this.props.fetchVenues(place, location);
    this.props.history.push("/venues");
  }

  render() {
    return (
      <form action="">
        <input type="text" name="place" onChange={this.handleChange} value={this.place} className="place" placeholder="I'm looking for" />
        <input type="text" name="location" onChange={this.handleChange} value={this.location} className="location" placeholder="Place" />
        <button onClick={this.handleSubmit} ><img src="/image/search.png" alt="search icon" /></button>
      </form>
    )
  }
}

export default withRouter(connect(null, { fetchVenues} )(SearchForm));