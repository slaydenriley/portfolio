import React, { Component } from 'react';
import {connect} from 'react-redux'
import UsersContainer from './containers/usersContainer'
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Posts from './components/Posts';
import Login from './components/Login';




const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default App;
