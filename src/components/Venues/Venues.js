import React, { Component } from 'react';
import Header from "../Widgets/Header/Header";
class Venues extends Component {

  render() {
    return (
      <React.Fragment>
        <Header type="venues" />
        <div>
          Venues
        </div>
      </React.Fragment>
    );
  }
};

export default Venues;