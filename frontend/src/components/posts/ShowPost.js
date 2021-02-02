import {strftime} from 'strftime'
import React from 'react';
import PostComments from '../posts/PostComments'
import CommentInput from '../posts/CommentInput'

const ShowPost = props => {

  return (
    <div className="single-post">
      <div className="post-title"><h1>{props.post.title}</h1></div>
      <div className="post-content"dangerouslySetInnerHTML={{ __html: props.post.content}} />
      <PostComments comments={props.comments} />
      <CommentInput />

    </div>
  )
};

export default ShowPost;
