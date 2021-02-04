import React from 'react'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'


class Comments extends React.Component {

  render() {
    return (
      <div className="comments">
        <h1>Comments</h1>
        {this.props.comments.map(comment =>
          <div key={comment.id} className="comment-list">
            <h3><em>By: {comment.user_id}</em></h3>
            <form name="comment_id" id={comment.id}>
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
