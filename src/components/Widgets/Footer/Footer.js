import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="footer">
      <ul className="footer__list">
        <li className="footer__listItem">
          <Link to="/about" className="footer__itemLink">
            About Us
          </Link>
        </li>
        <li className="footer__listItem">
          <Link to="/contact" className="footer__itemLink">
            Contact
          </Link>
        </li>
        <li className="footer__listItem">
          <Link to="/blog" className="footer__itemLink">
            Blog
          </Link>
        </li>
      </ul>
    </footer>;
}

export default Footer;
