import React from 'react';

const ShowPost = props => {

  //let post = props.posts.filter(post => post.id == props.match.params.id)[0]

  return (
    <div className="single-post">
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
};

export default ShowPost;
