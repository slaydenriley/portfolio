import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import PostList from '../../components/posts/PostList'

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <PostList posts={this.props.posts.filter(post => post.category === "post")} title_name="Blog Posts" />
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
