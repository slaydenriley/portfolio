import {strftime} from 'strftime'
import React from 'react';
import PostComments from '../posts/PostComments'
import CommentInput from '../posts/CommentInput'

const ShowPost = props => {

  return (
    <div className="single-post">
      <div className="post-title"><h1>{props.post.title}</h1></div>
      <p className="post-content">{props.post.content}</p>
      <PostComments comments={props.comments} />
      <CommentInput />
    </div>
  )
};

export default ShowPost;
