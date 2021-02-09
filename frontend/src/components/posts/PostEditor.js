import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      content: this.props.post.content
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (value) => {
    this.state.content = value
  }

    render() {
      return (
        <div>
        <h1>{this.props.post.title}</h1>
          <ReactQuill
            value={this.state.content}
            onChange={this.handleChange}
            />
        </div>
      )
    }
}

export default PostEditor
