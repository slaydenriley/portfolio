import React from 'react';
import {Link} from "react-router-dom"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <hr className="line"/>
          <div className="dashboard-content">
            <Link className="dashboard-components" to="/dashboard/posts/new">New Post</Link>
            <Link className="dashboard-components" to="/dashboard/posts/edit">Manage Posts</Link>
            <Link className="dashboard-components" to="/dashboard/account/edit">Edit Account</Link>
            <Link className="dashboard-components" to="/dashboard/users/edit">Manage Users</Link>
            <Link className="dashboard-components" to="/dashboard/tags/edit">Manage Tags</Link>
          </div>
        </div>)
  }
};

export default Dashboard;
