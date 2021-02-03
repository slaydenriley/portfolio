import {strftime} from 'strftime'
import React from 'react';
import Comments from '../posts/Comments'
import CommentInput from '../posts/CommentInput'

const ShowProject = props => {
  return (
    <div className="single-post">
      <div className="post-title"><h1>{props.post.title}</h1></div>
      <div className="post-content"dangerouslySetInnerHTML={{ __html: props.post.content}} />
      <Comments comments={props.comments} />
      <CommentInput post_id={props.post.id}/>

    </div>
  )
};

export default ShowProject;
