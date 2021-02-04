import React from 'react';
import {NavLink} from "react-router-dom"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
          <div className="dashboard-components">
            <NavLink to="/dashboard/posts/new">New Post</NavLink>
            <NavLink to="/dashboard/posts/edit">Edit Posts</NavLink>
            <NavLink to="/dashboard/account/edit">Edit Account</NavLink>
          </div>
        </div>)
  }
};

export default Dashboard;
