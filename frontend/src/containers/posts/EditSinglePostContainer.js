import React from 'react'
import {connect} from 'react-redux'
import fetchPosts from '../../actions/fetchPosts'
import editPost from '../../actions/editPost'
import fetchSinglePost from '../../actions/fetchSinglePost'
import {stateToHTML} from 'draft-js-export-html';
import PostEditor from '../../components/posts/PostEditor'
import { Editor } from "react-draft-wysiwyg";
import { BlockReserveLoading } from 'react-loadingg';
import { Redirect} from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EditSinglePostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.post.post.title,
      user_id: this.props.post.post.user_id,
      content: this.props.post.post.content,
      category: this.props.post.post.category,
      id: this.props.match.params.id,
      redirectToNewPage: false
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSinglePost(id)
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.post.post.title,
      user_id: props.post.post.user_id,
      content: props.post.post.content,
      category: props.post.post.category,
      id: props.post.post.id,
      redirectToNewPage: false
    })
  }

  handleEditorChange(value) {
    this.setState({content: value})
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = this.state
    this.props.editPost(formData)
    this.props.history.push(`/${this.state.category}s/${this.state.id}`)
  }

  handleLoading = () => {
    if (this.props.post.requesting) {
      return <BlockReserveLoading />;
      console.log("we are requesting")
    }
    else {
      console.log("we are not requesting")
      return (
        <div className="new-post" onSubmit={this.handleSubmit}>
          <form>
            <div onChange={this.handleChange}>
              <PostEditor post={this.props.post.post}/>
            </div>

            <div className="rich-text-editor">
              <ReactQuill
                defaultValue={this.props.post.post.content}
                onChange={this.handleEditorChange.bind(this)}
              />
            </div>
          </form>
        </div>
      )
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
    post: state.single_post
  }
}

export default connect(mapStateToProps, {fetchSinglePost, editPost})(EditSinglePostContainer)
