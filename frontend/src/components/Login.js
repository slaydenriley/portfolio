import React from 'react';
//import { NavLink } from 'react-router-dom';
//import {Navbar, Nav} from 'react-bootstrap'

const Login = props => {
  return (
    <div className="login">
      <h1>Log In</h1>
        <form>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <input type="submit"></input>
        </form>
    </div>
  );
};

export default Login;
