// Nav.js
import React from "react";
import { Link } from "gatsby";

import "./nav.css";

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link
          activeStyle={{ borderBottom: "2px solid #e66b24" }}
	        to="/">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link  
          activeStyle={{ borderBottom: "2px solid #e66b24" }}
          to="/about">
          About
       </Link>
      </li>
      <li className="nav-list-item">
        <Link  
          activeStyle={{ borderBottom: "2px solid #e66b24" }}
          to="/blogs">
          Blog
        </Link>
      </li>
      <li className="nav-list-item">
        <Link  
          activeStyle={{ borderBottom: "2px solid #e66b24" }}
          to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;