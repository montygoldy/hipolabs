import React, { Component } from 'react';
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import List from "../Widgets/List/List";
class Venues extends Component {

  render() {
    return <React.Fragment>
        <Header type="venues" />
        <main className="main-content">
          <section className="venue">
            <List />
          </section>
          <Sidebar type="recent-search" />
        </main>
      </React.Fragment>;
  }
};

export default Venues;