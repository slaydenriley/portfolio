import React from "react";
import {NavLink} from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <p><em>A custom React/Redux/Rails app by Riley Slayden.</em> <NavLink to="/login">Admin Login</NavLink></p>
    </div>
  );
}

export default Footer;
