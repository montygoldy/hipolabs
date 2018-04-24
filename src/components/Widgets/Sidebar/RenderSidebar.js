import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchVenues } from "../../../actions/venues";

const RenderSidebar = ({ sidebarType, searches, onClickSearch, venueTips }) => {
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
      const itemTips = venueTips.tips.groups[0].items;
      template = (
        <aside className="sidebar tips-sidebar">
          <h3>Tips</h3>
          <ul className="sidebar__list">
            {itemTips.length > 0 ? (
              itemTips.slice(0, 10).map((tips, i) => {
                return (
                  <li className="sidebar__listItem" key={i}>
                    <Link to="#" className="sidebar__listItemLink">
                      <div className="left">
                        <img
                          src={`${tips.user.photo.prefix}64${
                            tips.user.photo.suffix
                          }`}
                          alt="Tips"
                          className="tips-image"
                        />
                      </div>
                      <div className="right">
                        <h4>
                          {tips.user.firstName} {tips.user.lastName}
                        </h4>
                        <p>{tips.text}</p>
                      </div>
                    </Link>
                  </li>
                );
              })
            ) : (
              <li className="sidebar__listItem">
                <h4>No Tips found</h4>
              </li>
            )}
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
