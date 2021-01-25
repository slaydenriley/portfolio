import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (
      <div className="App container py-3">
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
          <Navbar.Brand href="/" className="font-weight-bold text-muted">
            Riley Slayden
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default NavBar;


/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (

    <div className="navbar">
    <Navbar bg="dark">
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
*/
