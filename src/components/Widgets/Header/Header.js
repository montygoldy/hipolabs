import React from 'react';
import SearchForm from "../SearchForm/SearchForm";

const RenderHeader = ({ headerType }) => {
    let template = null;
    // Switch statement to use different header for 3 pages
    switch (headerType) {
      case "logo":
        template =  <div className="home-logo u-margin-bottom-l">
                      <img src="/image/logo/logo.png" alt="logo" className="home-logo__image" />
                    </div>
        break;
    
      case "venues":
        template = <div className="header-container u-margin-bottom-m">
                      <div className="header-content">
                        <div className="home-logo u-margin-bottom-l">
                          <img src="/image/logo/logo-venue.png" alt="logo" className="home-logo__image" />
                        </div>
                        <div className="search-container">
                          <SearchForm />
                        </div>
                      </div>
                   </div>
        break;

      case "venueDetail":
        template = <div className="header-container u-margin-bottom-m">
                      <div className="header-content">
                        <div className="home-logo u-margin-bottom-l">
                          <img src="/image/logo/logo-venue.png" alt="logo" className="home-logo__image" />
                        </div>
                      </div>
                    </div>
        break;

      default:
        template = null;
        break;
    }
    return template;
}

const Header = ({ type }) => {
  return (
    <header className="header">
      <RenderHeader headerType={type} />
    </header>
  )
}

export default Header;