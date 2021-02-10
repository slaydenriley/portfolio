import React from 'react';
import { Link } from 'react-router-dom';

class PostList extends React.Component {

  render() {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        <em>These are my technical blog posts</em>
        <hr className="line"/>
        <div>
        {this.props.posts.map(post =>
          <div key={post.id} className="post-list">
            <Link key={post.id} to={`/posts/${post.id}`}><h3><em>{post.title}</em></h3></Link>
          </div>)}
        </div>
      </div>
    );
  }
}

export default PostList;
