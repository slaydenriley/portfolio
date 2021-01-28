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
    if (this.props.requesting === true) {
      return <div>Loading...</div>
    }
    else {
      
    }
  }

  render() {
    return (
      <div>
        <ShowPost post={this.props.post} />
        {this.handleLoading()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps, {fetchSinglePost})(SinglePostContainer)

//        <Route path="/posts/:id" render={() => <ShowPost posts={this.props.posts}/>}/>
// <PostComments comments={this.props.post.post_comments} />
