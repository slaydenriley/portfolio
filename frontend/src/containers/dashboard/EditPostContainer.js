import React from 'react'
import {connect} from 'react-redux'

import PostEditor from '../../components/dashboard/posts/PostEditor'
import {Route} from 'react-router-dom';

class EditPostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  state = {
    title: '',
    content: ''
  };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
    console.log(this.state)
  };

  handleSubmit = (event) => {
    console.log("clicked!")
    event.preventDefault()

  };

  render() {
    return (
      <div onSubmit={this.handleSubmit.bind(this)}>
        <PostEditor />
      </div>
    )
  }
}

export default EditPostContainer
