import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import deletePost from '../../actions/deletePost'
import PostEditor from '../../components/posts/PostEditor'
import { Editor } from "react-draft-wysiwyg";
import {Link, Redirect} from 'react-router-dom'

class EditPostContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  handleDeleteClick = (event) => {
    let post = {post: {id: event.target.id}}
    this.props.deletePost(post)
  }

  render() {
    return (
      <>
        <div className="posts">
          <h1>Please select a post to edit...</h1>
          <hr className="line"/>
          {this.props.posts.map(post =>
            <div key={post.id} className="edit-post-list">
              <h2><em>{post.title}</em></h2>
              <Link to={`/dashboard/posts/edit/${post.id}`}>
                <button id={post.id} className="submit edit-post-button">
                  Edit Post
                </button>
              </Link>
              <button id={post.id} className="submit delete-post-button" onClick={this.handleDeleteClick}>Delete Post</button>
              <em><u>Published on:</u> {post.created_at}</em>
              <hr className="line"/>
            </div>)}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(EditPostContainer)
