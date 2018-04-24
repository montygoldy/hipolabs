import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchVenues } from "../../../actions/venues";

class RenderSidebar extends Component {
  onClickRecentSearches = (place, location) => {
    this.props.fetchVenues(place, location);
  };

  render() {
    const { sidebarType, searches, onClickRecentSearches } = this.props;
    let template = null;
    switch (sidebarType) {
      case "recent-search":
        template = (
          <aside className="sidebar">
            <h3>Recent Searches</h3>
            <ul className="sidebar__list">
              {searches.map((search, i) => {
                return (
                  <li className="sidebar__listItem" key={i}>
                    <Link
                      to="/venues"
                      onClick={this.onClickRecentSearches(search.query, search.location)}
                      className="sidebar__listItemLink"
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
  }
}

const mapStateToProps = state => ({
  searches: state.venueReducer.searches
});

export default connect(mapStateToProps, { fetchVenues })(RenderSidebar);