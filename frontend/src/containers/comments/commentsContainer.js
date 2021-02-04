import React from 'react'
import Comments from '../../components/comments/Comments'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'

class CommentsContainer extends React.Component {
  state = {
    user_id: this.props.user_id,
    post_id: this.props.post_id,
    id: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.state.comment_id = event.target.id
    let formData = this.state

   this.props.deleteComment(formData)

  }

  render() {
    return(
      <div onSubmit={this.handleSubmit}>
        <Comments comments={this.props.comments} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.account.user.id,
    post_id: state.single_post.post.id
  }
}

export default connect(mapStateToProps, {deleteComment})(CommentsContainer)
