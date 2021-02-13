import React from 'react'
import NewPost from '../../components/posts/NewPost'
import TagContainer from '../tags/tagContainer.js'
import {connect} from 'react-redux'
import addNewPost from '../../actions/addNewPost.js'
import fetchTags from '../../actions/fetchTags.js'
import ReactQuill from 'react-quill';
import { BlockReserveLoading } from 'react-loadingg';
import 'react-quill/dist/quill.snow.css';

class NewPostContainer extends React.Component {
  state = {
    title: '',
    user_id: this.props.user_id,
    content: '',
    category: "post",
    redirectToNewPage: false,
    image_link: '',
    tags: []
  };

  componentDidMount() {
    this.props.fetchTags()
  }

  handleChange = event => {
    let index
    if (event.target.type === "checkbox" && event.target.checked === true) {
      this.state.tags.push(event.target.value)
    } else if (event.target.type === "checkbox" && event.target.checked === false) {
        index = this.state.tags.indexOf(+event.target.value)
        this.state.tags.splice(index, 1)
    } else {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = this.state
    this.props.addNewPost(formData)
    this.props.history.push(`/${this.state.category}s/${this.props.post.post.id}`)
  };

  handleEditorChange = (value) => {
    this.setState({content: value})
  }

  handleLoading = () => {
    if (this.props.tags.requesting || this.props.post.requesting) {
      return <BlockReserveLoading />;
    }
    else {
      return (
        <div className="new-post">
          <div onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
            <NewPost tags={this.props.tags.tags}/>
          </div>

            <div className="rich-text-editor">
              <ReactQuill
                value={this.state.content}
                onChange={this.handleEditorChange}
              />
            </div>
        </div>
      )
    }
  }

  render() {
    return (
      <>{this.handleLoading()}</>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.account.user.id,
        tags: state.tags,
        post: state.single_post
    };
};

export default connect(mapStateToProps, {addNewPost, fetchTags})(NewPostContainer)
