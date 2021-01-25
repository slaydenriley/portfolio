import React from 'react';

const Posts = props => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {props.posts.map(post =>
        <div key={post.id}>
          <a href={"/posts/" + post.id}><h2>Title: {post.title}</h2></a>
          <p>{post.content}</p>
        </div>)}
    </div>
  );
};

export default Posts;
