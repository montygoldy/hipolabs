import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__listItem"><Link to="/about">About Us</Link></li>
        <li className="footer__listItem"><Link to="/contact">Contact</Link></li>
        <li className="footer__listItem"><Link to="/blog">Blog</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
