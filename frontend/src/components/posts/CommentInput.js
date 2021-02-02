import React from 'react'
import {connect} from 'react-redux'
import addPostComment from '../../actions/addPostComment'

class CommentInput extends React.Component {
  state = {
    author_email: '',
    author_name: '',
    content: '',
    post_id: this.props.post_id
  }

  handleChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = this.state
    this.props.addPostComment(formData)
  };

  render() {
    return (
      <div className="comment-input">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <h2>Add New Comment</h2>
            <input type="text" name="author_name" placeholder="Your Name"/><br/>
            <input type="text" name="author_email" placeholder="Your Email"/><br/>
            <textarea name="content" placeholder="What do you think?"/><br/>
            <input type="submit"/>
          </form>
      </div>)
    }
}

export default connect(null, {addPostComment})(CommentInput)

/*
{props.account.map(user =>
  <div key={user.id}>
    <em>Logged in: {user.name}</em>
    <h2>Description</h2>
    <p>{user.description}</p>
    <h2>Email</h2>
    <a href={"mailto:" + user.email}>{user.email}</a>
  </div>)}
  */
