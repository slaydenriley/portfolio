import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import editPost from '../../actions/editPost'
import fetchSinglePost from '../../actions/fetchSinglePost'
import {stateToHTML} from 'draft-js-export-html';
import PostEditor from '../../components/posts/PostEditor'
import { Editor } from "react-draft-wysiwyg";
import { BlockReserveLoading } from 'react-loadingg';

class EditSinglePostContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
  }

  handleLoading = () => {
    if (this.props.post.requesting) {
      console.log("loading")
      return <BlockReserveLoading />;
    }
    else {
      return (
        <>
          <PostEditor post={this.props.post.post}/>
        </>
      )
    }
  }
  render() {
    return (
        <div >
          {this.handleLoading()}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.single_post
  }
}

export default connect(mapStateToProps, {fetchSinglePost})(EditSinglePostContainer)
