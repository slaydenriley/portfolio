import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import fetchTags from '../../actions/fetchTags'
import deleteTag from '../../actions/deleteTag'
import { useHistory } from 'react-router-dom'
import { BlockReserveLoading } from 'react-loadingg';
import TagContainer from './tagContainer'

class EditTagContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTags()
  }

  handleDeleteClick = (event) => {
    let tag = {tag: {id: event.target.id}}
    this.props.deleteTag(tag)
  }


  handleLoading = () => {
    if (this.props.tags.requesting) {
      return <BlockReserveLoading />
    }
    else {
      return (
        <div className="posts">
          <h1>Tag Manager</h1>
          <hr className="line"/>
          <div className="tags">
          <div className="row-1">
            {this.props.tags.tags.map(tag =>
              <div key={tag.id} className="edit-post-list">
                <h2><em>{tag.name}</em></h2>
                <button id={tag.id} className="submit delete-post-button" onClick={this.handleDeleteClick}>Delete Tag</button>
                <hr className="line"/>
              </div>)}
          </div>

          <div className="row-2">
            <TagContainer />
          </div>
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
