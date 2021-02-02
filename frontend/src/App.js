import React from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import {connect} from 'react-redux'

//import AccountContainer from './containers/accountContainer';
import PostsContainer from './containers/postsContainer';
import ProjectsContainer from './containers/projectsContainer';
import SinglePostContainer from './containers/singlePostContainer';
import SingleProjectContainer from './containers/singleProjectContainer';
import LoginContainer from './containers/loginContainer';
import DashboardContainer from './containers/dashboardContainer';
import LogoutContainer from './containers/logoutContainer';
import NewPostContainer from './containers/dashboard/NewPostContainer';
import EditPostContainer from './containers/dashboard/EditPostContainer';
import Footer from "./components/Footer";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar logged_in={this.props.logged_in}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectsContainer} />
          <Route exact path="/posts" component={PostsContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/posts/:id" component={SinglePostContainer} />
          <Route path="/projects/:id" component={SingleProjectContainer} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/logout" component={LogoutContainer} />
          <Route exact path="/dashboard/posts/new" component={NewPostContainer} />
          <Route exact path="/dashboard/posts/edit" component={EditPostContainer} />
      
        </div>
      </Router>
    )
  }
};

const mapStateToProps = state => ({
  logged_in: state.account.logged_in
});

export default connect(mapStateToProps)(App);

//<Route exact path="/account" component={AccountContainer} />
