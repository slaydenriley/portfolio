import React from 'react';

const SinglePost = ({match, posts}) => {
  return (
    <div className="single-post">
      <h3>{ posts[match.params].title }</h3>
    </div>

  )
};

export default SinglePost;
