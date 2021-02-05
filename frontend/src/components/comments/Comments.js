import React from 'react'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'
import DeleteComment from '../../components/comments/DeleteComment'


class Comments extends React.Component {

  render() {
    return (
      <div className="comments">
        <h1>Comments</h1>
        {this.props.comments.map(comment =>
          <div key={comment.id} className="comment-list">

            <h3><em>{comment.user.name}</em></h3>
            <em>...on {comment.created_at}</em>
            <p>{comment.content}</p>

            <DeleteComment comment={comment} user_id={this.props.user_id}/>
            <hr className="line"/>
          </div>)}
      </div>
    );
  }
}


export default connect(null, {deleteComment})(Comments)

//  <DeleteComment comment={comment} user_id={this.props.user.id}/>
