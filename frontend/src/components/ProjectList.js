import React from 'react';
import {Link} from 'react-router-dom'
const ProjectList = props => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {props.projects.map(project =>
        <div key={project.id}>
          <h2>Title: {project.name}</h2>
          <p>{project.description}</p>
          <Link key={project.id} to={`/projects/${project.id}`}>Read More...</Link>
        </div>)}
    </div>
  );
};

export default ProjectList;
