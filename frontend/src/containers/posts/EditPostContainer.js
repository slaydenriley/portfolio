import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import fetchSinglePost from '../../actions/fetchSinglePost'
import EditPostList from '../../components/posts/EditPostList'
import {stateToHTML} from 'draft-js-export-html';
import PostEditor from '../../components/posts/PostEditor'
import { Editor } from "react-draft-wysiwyg";

class EditPostContainer extends React.Component {
  state = {
    content: this.props.singlePost.post.content
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.fetchSinglePost(event.target.value)
  }

  handleEditorChange = (editorState) => {
    let html = stateToHTML(editorState.getCurrentContent())
    this.setState({content: html})
    console.log(this.state)
  }

  render() {
    return (
      <div>
      <div onClick={this.handleClick}>
        <EditPostList posts={this.props.posts}/>
        <PostEditor post={this.props.singlePost}/>
      </div>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="textEditorWrap"
          editorClassName="textEditor"
          onEditorStateChange={this.handleEditorChange}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    singlePost: state.single_post
  }
}



export default connect(mapStateToProps, {fetchPosts, fetchSinglePost})(EditPostContainer)
