import React, { Component } from "react";
import Footer from "./Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;