import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ImageList = ({ venueDetail }) => {
  const venuePics = venueDetail.photos.groups[0] ? (
    venueDetail.photos.groups[0].items
  ) : (
    <h3>No Photos Found</h3>
  );
  return (
    <ul className="imageList">
      {venuePics.length > 0 ? (
        venuePics.slice(0, 10).map((pic, i) => {
          return (
            <li className="imageList__item" key={i}>
              <Link to="#" className="imageList__itemLink">
                <img
                  src={`${pic.prefix}256${pic.suffix}`}
                  alt="Venue"
                  className="imageList__image"
                />
                <div className="imageList__cover">
                  <div className="userBox">
                    <div className="userImage">
                      <img
                        src={`${pic.user.photo.prefix}128${
                          pic.user.photo.suffix
                        }`}
                        alt={pic.user.id}
                      />
                    </div>
                    <h4 className="username">{`${pic.user.firstName} ${
                      pic.user.lastName
                    }`}</h4>
                  </div>
                </div>
              </Link>
            </li>
          );
        })
      ) : (
        <li className="imageList__item">
          <h2>NO PICTURES FOUND</h2>
        </li>
      )}
    </ul>
  );
};

ImageList.propTypes = {
  venueDetail: PropTypes.object.isRequired
};

export default ImageList;
