import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import SearchForm from "../Widgets/SearchForm/SearchForm";
class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <Header type="logo" />
        <main className="content">
          <h2 className="main-text">Lorem Ipsum dolor sit!</h2>
          <span className="secondary-text">Lorem Ispsum dolor sit amet, consectetor adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
          <SearchForm />
        </main>
      </React.Fragment>
    )
  }
}

export default Home;
