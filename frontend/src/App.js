import React from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';

//import AccountContainer from './containers/accountContainer';
import PostsContainer from './containers/postsContainer';
import ProjectsContainer from './containers/projectsContainer';
import SinglePostContainer from './containers/singlePostContainer';
import LoginContainer from './containers/loginContainer';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route exact path="/posts" component={PostsContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/posts/:id" component={SinglePostContainer} />


        </div>
      </Router>
    )
  }
};

export default App;

//<Route exact path="/account" component={AccountContainer} />
