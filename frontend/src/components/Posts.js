import React from 'react';

class Posts extends React.Component {

  handleClick = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {this.props.posts.map(post =>
          <div key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>{post.content}</p>
            <button onClick={this.handleClick(post.id)}>Read More...</button>
          </div>)}
      </div>
    );
  }
}

export default Posts;
