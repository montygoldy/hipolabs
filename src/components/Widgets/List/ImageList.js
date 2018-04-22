import React from "react";
import { Link } from "react-router-dom";
const ImageList = ({ venueDetail }) => {
  return (
    <ul className="imageList">
      {
        // venueDetail.photos.groups.map((photo, i) => {
          <li className="imageList__item"  >
            <Link to="#" className="imageList__itemLink">
              <img src="/image/background.jpg" alt="Venue" className="imageList__image" />
              <div className="imageList__cover">
                <div className="userBox">
                  <div className="userImage">
                    <img src="/image/background.jpg" alt="Venue" />
                  </div>
                  <h4 className="username">Cem Ekici</h4>
                </div>
              </div>
            </Link>
          </li>
        // })
      }
    </ul>
  );
}

export default ImageList;