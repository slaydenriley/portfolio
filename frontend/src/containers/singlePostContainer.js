import React from 'react'
import {connect} from 'react-redux'

import fetchSinglePost from '../actions/fetchSinglePost'
import ShowPost from '../components/ShowPost'
import PostComments from '../components/PostComments'


class SinglePostContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
  }

  handleLoading = () => {
    if (this.props.post.requesting) {
      return <div>Loading</div>
    } else {
      return <ShowPost post={this.props.post.post} />
    }
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
    post: state.single_post,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, {fetchSinglePost})(SinglePostContainer)

//        <Route path="/posts/:id" render={() => <ShowPost posts={this.props.posts}/>}/>
// <PostComments comments={this.props.post.post_comments} />
