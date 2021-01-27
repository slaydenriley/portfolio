import React from 'react';
import PostComments from '../components/PostComments'

const ShowPost = props => {

  return (
    <div className="single-post">
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <PostComments />
    </div>
  )
};

export default ShowPost;
