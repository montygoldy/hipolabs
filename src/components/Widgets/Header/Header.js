import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProgressBar from '../ProgessBar/ProgressBar';

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
        template = <div className="venue-detail-header u-margin-bottom-m" style={{ background: `url(${venueInfo.bestPhoto.prefix}1400${venueInfo.bestPhoto.suffix}), rgba(18, 25, 95, .6)` }}>
            {<React.Fragment>
                <div className="header-top-content">
                  <div className="home-logo">
                    <Link to="/">
                      <img src="/image/logo/logo-venue.png" alt="logo" className="home-logo__image" />
                    </Link>
                    .<div className="category-icon-wrapper">
                      <img src={`${venueInfo.categories[0].icon.prefix}100${venueInfo.categories[0].icon.suffix}`} alt="category icon" className="category-icon" />
                    </div>
                  </div>
                  <h2 className="venue-name">{venueInfo.name}</h2>
                </div>

                <div className="venue-info-section">
                  <div className="venue-info-content">
                    <div className="left-side">
                      <div className="address">
                        <img src="/image/location-icon.png" alt="Icon" />
                        <span>
                          {`${venueInfo.location.address}, ${
                            venueInfo.location.city
                          }, ${venueInfo.location.country}`}
                        </span>
                      </div>
                      <div className="telephone">
                        <img src="/image/telephone-icon.png" alt="Icon" />
                        <span>{venueInfo.contact.formattedPhone ? venueInfo.contact.formattedPhone : "No Contact Info"}</span>
                      </div>
                      <div className="venue-userInfo">
                        <div className="user">
                          <img src="/image/user-icon.png" alt="Icon" />
                          <span>{venueInfo.stats.tipCount}</span>
                        </div>
                        <div className="tag">
                          <img src="/image/tag-icon.png" alt="Icon" />
                          <ProgressBar price={venueInfo.price.tier} />
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

Header.propTypes = {
  type: PropTypes.string.isRequired,
  venueDetail: PropTypes.object
}

RenderHeader.propTypes = {
  headerType: PropTypes.string.isRequired,
  venueInfo: PropTypes.object
}

export default Header;