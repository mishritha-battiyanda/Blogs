// Layout.js
import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Nav from "./Nav";

const Layout=({pageTitle,children})=>{
    return(     
    <div className="layout">
     <title>{pageTitle}</title>
    <Nav/>
    <main className="main">{children}</main>
    </div>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
  };
export default Layout