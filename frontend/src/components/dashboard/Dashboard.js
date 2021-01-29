import React from 'react';
import JoditEditor from "jodit-react";

const Dashboard = props => {

  return (
    <div className="dashboard">
      <h1><u>Dashboard</u></h1>
        <div className="dashboard-components">
          <h2>Create New Post</h2>
            <JoditEditor />
        </div>
    </div>
  )
};

export default Dashboard;
