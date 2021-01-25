import React from 'react';

const Posts = props => {
  return (
    <div>
      {props.posts.map(post => <div key={post.id}><em>Title: {post.title}</em></div>)}
    </div>
  );
};

export default Posts;
