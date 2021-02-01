import React from 'react'
import NewPost from '../../components/dashboard/posts/NewPost'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState} from "draft-js";
import {stateToHTML} from 'draft-js-export-html';
import {convertToRaw} from 'draft-js';
import {connect} from 'react-redux'
import addNewPost from '../../actions/addNewPost.js'

class NewPostContainer extends React.Component {

  state = {
    title: '',
    user_id: "7",
    content: ''
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
  };

  handleEditorChange = (editorState) => {
    let html = stateToHTML(editorState.getCurrentContent())
    this.state.content = html
    console.log(this.state)
  }

  render() {
    return (
      <div className="new-post">
        <div onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <NewPost />
          <Editor
            //editorState={this.state.content}
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

export default connect(null, {addNewPost})(NewPostContainer)
