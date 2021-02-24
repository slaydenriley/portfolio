import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import PostList from '../../components/posts/PostList'
import { BlockReserveLoading } from 'react-loadingg';

class PostsContainer extends React.Component {
  state = {
    posts: []
  }


  componentDidMount() {
    this.props.fetchPosts()
    this.setState({posts: this.props.posts.posts.filter(post => post.category === "post")})
  }

  handleLoading = () => {
    if (this.props.posts.requesting) {
      return <BlockReserveLoading />;

    } else {
      return(
        <div>
        <PostList click={this.handleClick} posts={this.state.posts} />
        </div>)
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({posts: this.props.posts.posts.filter(post => post.category === "post").sort(function(a, b) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase())})
    })
  }

  render() {
    return (
      <div>
        {this.handleLoading()}
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
