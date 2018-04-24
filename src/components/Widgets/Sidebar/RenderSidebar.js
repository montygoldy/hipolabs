import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchVenues } from "../../../actions/venues";

const RenderSidebar = ({ sidebarType, searches, onClickSearch }) => {
  let template = null;
  switch (sidebarType) {
    case "recent-search":
      template = (
        <aside className="sidebar">
          <h3>Recent Searches</h3>
          <ul className="sidebar__list">
            {searches.slice(0, 10).map((search, i) => {
              return (
                <li className="sidebar__listItem" key={i}>
                  <Link
                    to="/venues"
                    className="sidebar__listItemLink"
                    onClick={() => onClickSearch(search)}
                  >
                    {search.query} in {search.location}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      );
      break;

    case "tips":
      template = (
        <aside className="sidebar tips-sidebar">
          <h3>Tips</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <Link to="#" className="sidebar__listItemLink">
                <div className="left">
                  <img
                    src="/image/background.jpg"
                    alt="Tips"
                    className="tips-image"
                  />
                </div>
                <div className="right">
                  <h4>Arzu sendag</h4>
                  <p>guzei mekan cok serdim.</p>
                </div>
              </Link>
            </li>
          </ul>
          <Link to="#" className="allTips">
            All Tips
          </Link>
        </aside>
      );
      break;

    default:
      template = null;
      break;
  }
  return template;
};

const mapStateToProps = state => ({
  searches: state.venueReducer.searches
});

const mapDispatchToProps = dispatch => ({
  onClickSearch: search => {
    dispatch(fetchVenues(search.query, search.location));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderSidebar);
