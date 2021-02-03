import React from 'react'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'


class Comments extends React.Component {

  handleSubmit = (e, id, post_id) => {
    e.preventDefault()
    this.props.deleteComment(id, post_id)
  }

  render() {
    return (
      <div className="post_comments">
        <h1><u>Comments</u></h1>
        {this.props.comments.map(comment =>
          <div key={comment.id} className="comment-list">
            <h3><em>By: {comment.author_name}</em></h3>
            <form onSubmit={e => this.handleSubmit(e, comment.id, comment.post_id)}>
              <input type="submit" value="Delete"/>
            </form>
            <p>{comment.created_at}</p>
            <em>{comment.content}</em>
          </div>)}
      </div>
    );
  }
}

export default connect(null, {deleteComment})(Comments)

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
