import React from 'react';

const ShowPost = props => {

  return (
    <div className="single-post">
      <h1>Post</h1>

      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <h2>Comments</h2>
      {props.post.post_comments.map(comment =>
        <div>
          <em>By: {comment.author_name}</em>
          <p>{comment.content}</p>
        </div>)}
    </div>
  )
};

export default ShowPost;
