import {strftime} from 'strftime'
import React from 'react';

const ShowPost = props => {

  return (
    <div className="single-post">
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <h2><u>Comments</u></h2>
      {props.comments.map(comment =>
        <div>
          <em>By: {comment.author_name}, {comment.created_at} </em>
          <p>{comment.content}</p>

        </div>)}
    </div>
  )
};

export default ShowPost;
