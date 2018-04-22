import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import SearchForm from "../Widgets/SearchForm/SearchForm";
class Home extends Component { 
  render() {
    return (
      <div className="pageContainer">
        <Header type="home" />
        <main className="content">
          <h2 className="main-text u-margin-bottom-s">Lorem Ipsum dolor sit!</h2>
          <span className="secondary-text u-margin-bottom-m">Lorem Ispsum dolor sit amet, consectetor adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
          <SearchForm />
        </main>
      </div>
    );
  }
}

export default Home;
