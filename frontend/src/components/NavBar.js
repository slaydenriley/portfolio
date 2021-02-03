import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar} from 'react-bootstrap'

const NavBar = props => {

  const auth = props.logged_in;

  const navtype = () => {
    return auth ?
      <div>
        <Navbar bg="dark" className="">
          <Navbar.Brand className="font-weight-bold text-muted">
            Riley Slayden
          </Navbar.Brand>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/logged">Logged</NavLink>

        </Navbar>
      </div>
      :
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
  }

  return (
    <div>
      {navtype()}
    </div>

  );
};

export default NavBar;

//<NavLink to="/account">Account</NavLink>
