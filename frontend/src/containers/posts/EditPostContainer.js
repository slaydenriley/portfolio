import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import editPost from '../../actions/editPost'
import fetchSinglePost from '../../actions/fetchSinglePost'
import {stateToHTML} from 'draft-js-export-html';
import PostEditor from '../../components/posts/PostEditor'
import { Editor } from "react-draft-wysiwyg";
import {Link} from 'react-router-dom'

class EditPostContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <>
        <div className="posts">
          <h1>Please select a post to edit...</h1>
          {this.props.posts.map(post =>
            <div onClick={this.handleClick} key={post.id} className="post-list">
              <Link to={`/dashboard/posts/edit/${post.id}`}>{post.title}</Link>
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



export default connect(mapStateToProps, {fetchPosts, editPost})(EditPostContainer)
