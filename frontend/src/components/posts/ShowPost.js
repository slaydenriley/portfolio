import React from 'react';

const ShowPost = props => {
  return (
    <div className="single-post">
      <div className="post-title"><h1>{props.post.title}</h1></div>
      <hr className="line"/>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: props.post.content}} />

    </div>
  )
};

export default ShowPost;
