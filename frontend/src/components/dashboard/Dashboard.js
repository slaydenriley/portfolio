import React from 'react';
import {NavLink} from "react-router-dom"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
          <div className="dashboard-components">
            <h2>
            <NavLink to="/dashboard/posts/new">New Post</NavLink><br/>
            <NavLink to="/dashboard/posts/edit">Edit Posts</NavLink><br/>
            <NavLink to="/dashboard/account/edit">Edit Account</NavLink><br/>
            </h2>
          </div>
        </div>)
  }
};

export default Dashboard;
