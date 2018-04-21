import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import SearchForm from "../Widgets/SearchForm/SearchForm";
class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      res: []
    }
  }

  venueSearch = (place, location) => {
    console.log(place, location);
    const api_id = process.env.REACT_APP_CLIENT_ID;
    const api_key = process.env.REACT_APP_CLIENT_SECRET;
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
