import React from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

import Login from './components/Login';
import AccountContainer from './containers/accountContainer';
import PostsContainer from './containers/postsContainer';

const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/posts" component={PostsContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={AccountContainer} />
      </div>
    </Router>
  );
};

export default App;
