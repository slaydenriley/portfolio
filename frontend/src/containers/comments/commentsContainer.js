import React from 'react'
import Comments from '../../components/comments/Comments'
import DeleteComment from '../../components/comments/DeleteComment'
import {connect} from 'react-redux'
import deleteComment from '../../actions/deleteComment'

class CommentsContainer extends React.Component {
  state = {
    user_id: this.props.user.id,
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

  render() {
    return(
      <div onSubmit={this.handleSubmit}>
        <Comments comments={this.props.comments} user={this.props.user}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    post_id: state.single_post.post.id
  }
}

export default connect(mapStateToProps, {deleteComment})(CommentsContainer)
