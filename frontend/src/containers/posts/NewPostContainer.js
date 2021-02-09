import React from 'react'
import NewPost from '../../components/posts/NewPost'

import { Redirect } from 'react-router-dom'


import {connect} from 'react-redux'
import addNewPost from '../../actions/addNewPost.js'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class NewPostContainer extends React.Component {
  state = {
    title: '',
    user_id: this.props.user_id,
    content: '',
    category: "post",
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
    this.setState({redirectToNewPage: true})
    this.handleRedirect()
  };


  handleRedirect = () => {
    if (this.state.redirectToNewPage === true) {
      <Redirect to="/posts"/>
    }
  }

  handleEditorChange = (value) => {
    this.setState({content: value})
  }

  render() {
    return (
      <div className="new-post">
        <div onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <NewPost />
          <div className="rich-text-editor">
            <ReactQuill
              value={this.state.content}
              onChange={this.handleEditorChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.account.user.id
    };
};

export default connect(mapStateToProps, {addNewPost})(NewPostContainer)
