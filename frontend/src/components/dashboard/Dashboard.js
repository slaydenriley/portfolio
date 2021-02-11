import React from 'react';
import {NavLink} from "react-router-dom"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <hr className="line"/>
          <div className="dashboard-content">
            <NavLink className="dashboard-components" to="/dashboard/posts/new">New Post</NavLink>
            <NavLink className="dashboard-components" to="/dashboard/posts/edit">Manage Posts</NavLink>
            <NavLink className="dashboard-components" to="/dashboard/account/edit">Edit Account</NavLink>
            <NavLink className="dashboard-components" to="/dashboard/users/edit">Manage Users</NavLink>
          </div>
        </div>)
  }
};

export default Dashboard;
