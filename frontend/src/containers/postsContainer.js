import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../actions/fetchPosts'
import Posts from '../components/Posts'
import SinglePost from '../components/singlePost'
import { Route } from 'react-router-dom'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <Posts posts={this.props.posts} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)
