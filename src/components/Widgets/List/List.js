import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const List = ({ searchVenues }) => {
  return (
    <ul className="venue-list">
      {
        searchVenues.map((venue) => (
          <li className="venue-list__item" key={venue.id}>
          <Link to={`/venues/${venue.id}`} className="venue-list__itemLink">
            <div className="venue-list__cover" />
            <img
              src="/image/background.jpg"
              alt="Venue"
              className="venue-list__image"
            />
            <div className="venue-list__onTopData">
              <h3 className="venue-list__venue-name">{venue.name}</h3>
              <div className="venue-list__venueInfo">
                <div className="venue-list__userWrapper">
                  <div className="left">
                    <img src="/image/user-icon.png" alt="Icon" />
                  </div>
                  <div className="right">
                    <span className="user-text">123</span>
                  </div>
                </div>
                <div className="venue-list__tagWrapper">
                  <div className="left">
                    <img src="/image/tag-icon.png" alt="Icon" />
                  </div>
                  <div className="right">
                    <div className="bar">
                      <div className="percentage" />
                    </div>
                  </div>
                </div>
                <div className="venue-list__ratingWrapper">
                  <img src="/image/triangle.png" alt="icon" />
                  <span className="rating-text">8.8</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        ))
      }
    </ul>
  );
};

List.propTypes = {
  searchVenues: PropTypes.array.isRequired
}

export default List;