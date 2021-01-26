import React from 'react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {

  render() {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {this.props.posts.map(post =>
          <div key={post.id}>
            <h2>Title: {post.title}</h2>
            <Link key={post.id} to={`/posts/${post.id}`}>Read More...</Link>

          </div>)}
      </div>
    );
  }
}

export default Posts;
