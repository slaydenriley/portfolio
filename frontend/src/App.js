import React from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import {connect} from 'react-redux'

//import Posts
import PostsContainer from './containers/posts/postsContainer';
import SinglePostContainer from './containers/posts/singlePostContainer';

//import Projects
import ProjectsContainer from './containers/projects/projectsContainer';
import SingleProjectContainer from './containers/projects/singleProjectContainer';

import Resume from './components/Resume'


import LoginContainer from './containers/authorized/loginContainer';
import SignupContainer from './containers/authorized/signupContainer'
import DashboardContainer from './containers/dashboard/dashboardContainer';
import LogoutContainer from './containers/authorized/logoutContainer';
import NewPostContainer from './containers/posts/NewPostContainer';
import EditPostContainer from './containers/posts/EditPostContainer';
import EditSinglePostContainer from './containers/posts/EditSinglePostContainer'
import loginStatus from './actions/loginStatus'
import Footer from "./components/Footer";

class App extends React.Component {

  componentWillMount() {
    this.props.loginStatus()
  }

  handleView = () => {
    if (this.props.logged_in) {
      if (this.props.admin) {
        return(
          <>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/dashboard/posts/new" component={NewPostContainer} />
            <Route exact path="/dashboard/posts/edit" component={EditPostContainer} />
            <Route exact path="/logout" component={LogoutContainer} />
            <Route exact path="/dashboard/posts/edit/:id" component={EditSinglePostContainer} />
          </>
        )
      }

      else  {
        return <Route exact path="/logout" component={LogoutContainer} />
      }
    }
    else {
      return (
        <>
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </>
      )
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-body">
            <NavBar logged_in={this.props.logged_in} admin={this.props.admin}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route path="/posts/:id" component={SinglePostContainer} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route path="/projects/:id" component={SingleProjectContainer} />
            <Route path="/resume" component={Resume} />
            {this.handleView()}
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    logged_in: state.account.logged_in,
    admin: state.account.admin
  }
}

export default connect(mapStateToProps, {loginStatus})(App);
