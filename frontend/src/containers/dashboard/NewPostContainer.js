import React from 'react'
import {connect} from 'react-redux'

import NewPost from '../../components/dashboard/posts/NewPost'
import {Route} from 'react-router-dom';

class NewPostContainer extends React.Component {

  render() {
    return (
      <div>
        <NewPost />
      </div>
    )
  }
}

export default NewPostContainer
