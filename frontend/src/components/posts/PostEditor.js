import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.post.title,
      user_id: this.props.post.user_id,
      content: this.props.post.content,
      category: this.props.post.category,
      redirectToNewPage: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (value) => {
    this.state.content = value
    console.log(this.state)
  }

    render() {
      return (
        <div className="new-post">
        <h1>{this.props.post.title}</h1>
        <select name="category" required>
          <option value="post">Post</option>
          <option value="project">Project</option>
        </select><br/>
        <em>Previous category: {this.props.post.category}</em><br/>
        <input className="submit" type="submit" value="Updated Post"/><br/><br/>
          <div className="rich-text-editor">
            <ReactQuill
              value={this.state.content}
              onChange={this.handleChange}
            />
            </div>
        </div>
      )
    }
}

export default PostEditor
