import React from 'react';

const Projects = props => {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map(project =>
        <div key={project.id}>
          <h2>Title: {project.name}</h2>
          <p>{project.description}</p>
        </div>)}
    </div>
  );
};

export default Projects;
