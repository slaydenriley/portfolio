import React from 'react'
import NewPost from '../../components/dashboard/posts/NewPost'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import {connect} from 'react-redux'
import addNewPost from '../../actions/addNewPost.js'

class NewPostContainer extends React.Component {

  state = {
    title: '',
    content: '',
    user_id: "7"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = this.state
    this.props.addNewPost(formData)
  };

  render() {
    return (
      <div onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
        <NewPost />
      </div>
    )
  }
}

export default connect(null, {addNewPost})(NewPostContainer)
