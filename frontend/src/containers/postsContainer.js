import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../actions/fetchPosts'
import PostList from '../components/PostList'
import ShowPost from '../components/ShowPost'
import {Route} from 'react-router-dom';

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>

        <Route path={`/posts/:id`} component={ShowPost} posts={this.props.posts}/>
        <PostList posts={this.props.posts} />
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
