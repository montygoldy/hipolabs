import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import ImageList from "../Widgets/List/ImageList";
class VenueDetail extends Component {

  render() {
    return <React.Fragment>
        <Header type="venueDetail" />
        <main className="main-content">
          <section className="venue">
            <ImageList />
          </section>
          <div className="sidebar-wrapper">
            <Sidebar type="tips" />
          </div>
        </main>
      </React.Fragment>;
  }
};

export default VenueDetail;