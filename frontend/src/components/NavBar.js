import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (

    <div className="navbar App container py-3">
      <Navbar bg="light">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Riley Slayden
        </Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Navbar>
    </div>
  );
};

export default NavBar;
