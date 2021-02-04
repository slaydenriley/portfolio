import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBar = props => {

  const auth = props.logged_in;

  const navtype = () => {
    return auth ?
      <div>
        <Navbar className="container-fluid">
          <Navbar.Brand className="font-weight-bold text-muted">
            Riley Slayden
          </Navbar.Brand>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
            <div className="ml-auto">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </div>
        </Navbar>
      </div>
      :
      <div>
        <Navbar>
          <Navbar.Brand className="font-weight-bold text-muted">
            Riley Slayden
          </Navbar.Brand>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
            <div className="ml-auto">
              <NavLink to="/signup">Create Account</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
        </Navbar>
      </div>
  }

  return (
    <div>
      {navtype()}
    </div>

  );
};

export default NavBar;

//<NavLink to="/account">Account</NavLink>
