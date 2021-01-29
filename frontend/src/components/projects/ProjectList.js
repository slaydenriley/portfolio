import React from 'react';
import {Link} from 'react-router-dom'
const ProjectList = props => {
  return (
    <div className="projects">
      <h1><u>Projects</u></h1>
      {props.projects.map(project =>
        <div key={project.id} className="project-list">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <Link key={project.id} to={`/projects/${project.id}`}>Learn more...</Link>
        </div>)}
    </div>
  );
};

export default ProjectList;
