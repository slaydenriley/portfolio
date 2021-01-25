import React, { Component } from 'react';
import {connect} from 'react-redux'
import UsersContainer from './containers/usersContainer'
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
