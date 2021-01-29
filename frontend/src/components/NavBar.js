import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBar = () => {

  return (

    <div>
      <Navbar bg="dark" className="">
        <Navbar.Brand className="font-weight-bold text-muted">
          Riley Slayden
        </Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/posts">Posts</NavLink>

      </Navbar>
    </div>
  );
};

export default NavBar;

//<NavLink to="/account">Account</NavLink>
