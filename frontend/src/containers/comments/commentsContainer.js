import React from 'react'
import Comments from '../../components/comments/Comments'
import DeleteComment from '../../components/comments/DeleteComment'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'
import AddCommentContainer from './addCommentContainer'

class CommentsContainer extends React.Component {
  state = {
    post_id: this.props.post_id,
    id: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let id = event.target.id
    this.state.id = parseInt(id)
    let formData = this.state
    this.props.deleteComment(formData)
  }

  handleView = () => {
    if (this.props.logged_in) {
      return(
        <div onSubmit={this.handleSubmit}>
          <Comments comments={this.props.comments} />
          <AddCommentContainer />
        </div>
      )
    }
    else
      return(
        <div onSubmit={this.handleSubmit}>
          <Comments comments={this.props.comments} />
        </div>
      )
    }

  render() {
    return(
      <div>{this.handleView()}</div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    post_id: state.single_post.post.id,
    logged_in: state.account.logged_in
  }
}

export default connect(mapStateToProps, {deleteComment})(CommentsContainer)
