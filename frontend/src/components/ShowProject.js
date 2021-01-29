
import React from 'react';

const ShowProject = props => {

  return (
    <div className="single-project">
      <div className="project-title"><h1>{props.project.name}</h1></div>
      <p className="project-content">{props.project.description}</p>
      <h2><u>Comments</u></h2>
      {props.comments.map(comment =>
        <div>
          <em>By: {comment.author_name}, {comment.created_at} </em>
          <p>{comment.content}</p>

        </div>)}
    </div>
  )
};

export default ShowProject;
