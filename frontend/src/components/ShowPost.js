import React from 'react';

const ShowPost = props => {

  return (
    <div className="single-post">
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
};

export default ShowPost;
//  <p>{props.post.post_comments.map(com => com.content)}</p>
