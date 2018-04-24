import React from 'react';
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import List from "../Widgets/List/List";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../Widgets/Loader/Loader";

const Venues = ({ venues, isLoading }) => {
  return (
    <React.Fragment>
      <Header type="venues" />
      <main className="main-content">
        <section className="venue">
          { !isLoading ? <List searchVenues={venues} /> : <Loader />  }
        </section>
        <Sidebar type="recent-search" />
      </main>
    </React.Fragment>
  );
};

Venues.propTypes = {
  venues: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  venues: state.venueReducer.venues,
  isLoading: state.venueReducer.isLoading
})

export default connect(mapStateToProps, null)(Venues);