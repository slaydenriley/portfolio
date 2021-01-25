import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default NavBar;
