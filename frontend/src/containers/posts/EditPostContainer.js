import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'


import deletePost from '../../actions/deletePost'
import PostEditor from '../../components/posts/PostEditor'
import {Link, Redirect} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';
import EditSinglePostContainer from './EditSinglePostContainer'

class EditPostContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  handleDeleteClick = (event) => {
    let post = {post: {id: event.target.id}}
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.props.deletePost(post)
    }
  }


  handleLoading = () => {
    if (this.props.posts.requesting) {
      return <BlockReserveLoading />
    }
    else {
      return (
        <div className="posts">
          <h1>Post & Project Manager</h1>
          <hr className="line"/>
          {this.props.posts.posts.map(post =>
            <div key={post.id} className="edit-post-list">
              <h2><em>{post.title} ({post.category})</em></h2>

              <Link to={`/dashboard/posts/edit/${post.id}`}>
                <button id={post.id} className="submit edit-post-button">
                  Edit Post
                </button>
              </Link>

              <button id={post.id} className="delete-post-button" onClick={this.handleDeleteClick}>Delete Post</button>
              <em><u>Published on:</u> {post.created_at}</em>
              <hr className="line"/>
            </div>)}
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleLoading()}
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
