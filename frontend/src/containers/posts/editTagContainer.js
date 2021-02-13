import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import fetchTags from '../../actions/fetchTags'
import deleteTag from '../../actions/deleteTag'
import { useHistory } from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';
import TagContainer from './tagContainer'
import TagEditor from '../../components/tags/TagEditor'

class EditTagContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTags()
  }

  handleDeleteClick = (event) => {
    let tag = {tag: {id: event.target.id}}
    if (window.confirm("Are you sure you want to delete this tag?")) {
      this.props.deleteTag(tag)
    }
  }

  handleLoading = () => {
    if (this.props.tags.requesting) {
      return <BlockReserveLoading />
    }
    else {
      return (
        <div className="posts">
          <h1>Tag Manager</h1>
          <div className="row-1">
            <TagEditor tags={this.props.tags} delete={this.handleDeleteClick}/>
          </div>
          <div className="row-2">
            <TagContainer />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.handleLoading()}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

export default connect(mapStateToProps, {fetchTags, deleteTag})(EditTagContainer)
