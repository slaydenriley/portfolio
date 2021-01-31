import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



class NewPost extends React.Component {
  state = {
    title: '',
    content: ''
  };

  handleChangeTitle = (event) =>  {
    this.setState({
      title: event.target.value
    })
  };

  handleChangeBody = (editorState) => {
    console.log(editorState)
    this.setState({
      content: editorState
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {post: this.state}
    this.props.submitPost(formData)
  };

  render() {
    const {editorState} = this.state;
    return (
      <div className="dashboard">
        <h1><u>Create New Post</u></h1>
          <div className="dashboard-components">
            <h2>Create New Post</h2>
              <form>
              <h3>Title</h3>
                <input type="text" value={this.props.title} name="title" placeholder="Post Title" onChange={this.handleChangeTitle}/>
                <h3>Content</h3>

                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={this.handleChangeBody}
                  />

                <input type="submit"/>
            </form><br/>
          </div>
        </div>)
  }
};

export default NewPost;
