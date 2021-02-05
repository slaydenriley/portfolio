import React from 'react'
import {connect} from 'react-redux'
import Comment from '../../components/comments/Comments'

class DeleteCommentContainer extends React.Component {

  render() {
    return (
      <div>
        <Comment comments={this.props.comments} user_id={this.props.user_id}/>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.account.user.id
  }
}

export default connect(mapStateToProps)(DeleteCommentContainer)
