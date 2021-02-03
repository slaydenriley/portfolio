import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../../actions/fetchPosts'
import PostList from '../../components/posts/PostList'
import {Route} from 'react-router-dom';

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <PostList posts={this.props.posts.filter(post => post.project === true)} title_name="Projects" />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(ProjectsContainer)
