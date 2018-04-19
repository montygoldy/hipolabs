import React from 'react';

const RenderHeader = ({ headerType }) => {
    let template = null;
    // Switch statement to use different header for 3 pages
    switch (headerType) {
      case "logo":
        template = <img src="/image/logo/logo.png" alt="logo" className="logo-image" />
        break;
    
      case "venues":
        template = <h1>venuesHeader</h1>
        break;

      case "venueDetail":
        template = <h1>venueDetail</h1>
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
  );
}

export default Header;