import React from 'react';
import { Link } from 'react-router-dom';

class PostList extends React.Component {

  render() {
    return (
      <div className="posts">
        <h1><u>Blog Posts</u></h1>
        {this.props.posts.map(post =>
          <div key={post.id} className="post-list">
            <h1><em>{post.title}</em></h1>
            <p>{post.content.substring(0, 250)}... <em><Link key={post.id} to={`/posts/${post.id}`}>Read More</Link></em></p>
            <em>Comments: {post.post_comments.length}</em>
          </div>)}
      </div>
    );
  }
}

export default PostList;
