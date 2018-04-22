import React, { Component } from 'react';
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import List from "../Widgets/List/List";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Venues extends Component {
  
  render() {
    return <React.Fragment>
        <Header type="venues" />
        <main className="main-content">
          <section className="venue">
            <List  searchVenues={this.props.venues} />
          </section>
          <Sidebar type="recent-search" />
        </main>
      </React.Fragment>;
  }
};

Venues.propTypes = {
  venues: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  venues: state.venue.venues
})

export default connect(mapStateToProps, null)(Venues);