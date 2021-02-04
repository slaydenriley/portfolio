import {strftime} from 'strftime'
import React from 'react';

const ShowProject = props => {
  return (
    <div className="single-post">
      <div className="post-title"><h1>{props.post.title}</h1></div>
      <div className="post-content"dangerouslySetInnerHTML={{ __html: props.post.content}} />

    </div>
  )
};

export default ShowProject;
