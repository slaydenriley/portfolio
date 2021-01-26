import React from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

import Login from './components/Login';
import AccountContainer from './containers/accountContainer';
import PostsContainer from './containers/postsContainer';
import ProjectsContainer from './containers/projectsContainer';


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/posts" component={PostsContainer} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={AccountContainer} />

      </div>
    </Router>
  );
};

export default App;
