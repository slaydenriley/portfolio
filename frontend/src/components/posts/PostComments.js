
import React from 'react'
class PostComments extends React.Component {

  render() {
    return (
      <div className="post_comments">
        <h1><u>Comments</u></h1>
        {this.props.comments.map(comment =>
          <div key={comment.id} className="comment-list">
            <h3><em>By: {comment.author_name}</em></h3>
            <p>{comment.created_at}</p>
            <em>{comment.content}</em>
          </div>)}
      </div>
    );
  }
}

export default PostComments

/*
{props.account.map(user =>
  <div key={user.id}>
    <em>Logged in: {user.name}</em>
    <h2>Description</h2>
    <p>{user.description}</p>
    <h2>Email</h2>
    <a href={"mailto:" + user.email}>{user.email}</a>
  </div>)}
  */
