import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import SearchForm from "../Widgets/SearchForm/SearchForm";
class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  venueSearch = (place, location) => {
    console.log(place, location);
    const api_id = process.env.REACT_APP_CLIENT_ID;
    const api_key = process.env.REACT_APP_CLIENT_SECRET;
    //this.props.history.push("/venues");
    fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&query=${place}&limit=10&client_id=${api_id}&client_secret=${api_key}&v=20180323`)
      .then(res => res.json())
      .then(data => this.setState({data: data.response.venues}))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="pageContainer">
        <Header type="home" />
        <main className="content">
          <h2 className="main-text u-margin-bottom-s">Lorem Ipsum dolor sit!</h2>
          <span className="secondary-text u-margin-bottom-m">Lorem Ispsum dolor sit amet, consectetor adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
          <SearchForm onSearch={this.venueSearch} />
        </main>
      </div>
    );
  }
}

export default Home;
