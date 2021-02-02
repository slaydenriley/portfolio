import React from 'react'
import NewPost from '../../components/dashboard/posts/NewPost'
import { Editor } from "react-draft-wysiwyg";
import { Redirect } from 'react-router-dom'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState} from "draft-js";
import {stateToHTML} from 'draft-js-export-html';
import {convertToRaw} from 'draft-js';
import {connect} from 'react-redux'
import addNewPost from '../../actions/addNewPost.js'

class NewPostContainer extends React.Component {
  state = {
    title: '',
    user_id: this.props.user_id.id,
    content: '',
    redirectToNewPage: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = this.state
    this.props.addNewPost(formData)

    // Need to find a way to do this AFTER post is successful
    this.state.redirectToNewPage = true
    this.handleRedirect()
  };

  handleRedirect = () => {
    if (this.state.redirectToNewPage === true) {
      <Redirect to="/posts"/>
    }
  }

  handleEditorChange = (editorState) => {
    let html = stateToHTML(editorState.getCurrentContent())
    this.state.content = html
  }

  render() {
    return (
      <div className="new-post">
        <div onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <NewPost />
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="textEditorWrap"
            editorClassName="textEditor"
            onEditorStateChange={this.handleEditorChange}
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user_id: JSON.parse(state.account.user)
    };
};

export default connect(mapStateToProps, {addNewPost})(NewPostContainer)
