import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

const RenderHeader = ({ headerType, venueInfo }) => {
    let template = null;
    // Switch statement to use different header for 3 pages
    switch (headerType) {
      case "home":
        template =  <div className="home-logo u-margin-bottom-l">
                      <Link to="/"><img src="/image/logo/logo.png" alt="logo" className="home-logo__image" /></Link>
                    </div>
        break;
    
      case "venues":
        template = <div className="header-container u-margin-bottom-m">
                      <div className="header-content">
                        <div className="home-logo u-margin-bottom-l">
                          <Link to="/"><img src="/image/logo/logo-venue.png" alt="logo" className="home-logo__image" /></Link>
                        </div>
                        <div className="search-container">
                          <SearchForm />
                        </div>
                      </div>
                   </div>
        break;

      case "venueDetail":
        template = <div className="venue-detail-header u-margin-bottom-m">
            {<React.Fragment>
                <div className="header-top-content">
                  <div className="home-logo">
                    <Link to="/">
                      <img src="/image/logo/logo-venue.png" alt="logo" className="home-logo__image" />
                    </Link>
                    <img src="/image/category-icon.png" alt="category icon" className="category-icon" />
                  </div>
                  <h2 className="venue-name">{venueInfo.name}</h2>
                </div>

                <div className="venue-info-section">
                  <div className="venue-info-content">
                    <div className="left-side">
                      <div className="address">
                        <img src="/image/location-icon.png" alt="Icon" />
                        <span>
                          Cafegeria Mh. hadife Sk. No: 15 Kadikoy
                        </span>
                      </div>
                      <div className="telephone">
                        <img src="/image/telephone-icon.png" alt="Icon" />
                        <span>0 (216) 346718</span>
                      </div>
                      <div className="venue-userInfo">
                        <div className="user">
                          <img src="/image/user-icon.png" alt="Icon" />
                          <span>`${venueInfo.name}`</span>
                        </div>
                        <div className="tag">
                          <img src="/image/tag-icon.png" alt="Icon" />
                          <div className="bar">
                            <div className="percentage" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right-side">
                      <div className="rating">
                        <span className="rating-text">
                          {venueInfo.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>}
          </div>;
        break;

      default:
        template = null;
        break;
    }
    return template;
}

const Header = ({ type, venueDetail }) => {
  return (
    <header className="header">
      <RenderHeader headerType={type} venueInfo={venueDetail} />
    </header>
  )
}

export default Header;