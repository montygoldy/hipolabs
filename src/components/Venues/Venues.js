import React from "react";
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import List from "../Widgets/List/List";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../Widgets/Loader/Loader";

const Venues = ({ venues, isLoading, hasError }) => {
  console.log(hasError, isLoading);
  return (
    <React.Fragment>
      <Header type="venues" />
      <main className="main-content">
        <section className="venue">
          {hasError ? (
            <h3>:( Sorry No Results Found</h3>
          ) : !isLoading ? (
            <List searchVenues={venues} />
          ) : (
            <Loader />
          )}
        </section>
        <Sidebar type="recent-search" />
      </main>
    </React.Fragment>
  );
};

Venues.propTypes = {
  venues: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  venues: state.venueReducer.venues,
  isLoading: state.venueReducer.isLoading,
  hasError: state.venueReducer.hasError
});

export default connect(mapStateToProps, null)(Venues);
