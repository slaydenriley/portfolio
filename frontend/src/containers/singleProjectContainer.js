import React from 'react'
import {connect} from 'react-redux'

import fetchSingleProject from '../actions/fetchSingleProject'
import ShowProject from '../components/projects/ShowProject'
import ProjectComments from '../components/projects/ProjectComments';
import { BlockReserveLoading } from 'react-loadingg';


class SingleProjectContainer extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchSingleProject(id)
  }

  handleLoading = () => {
    if (this.props.project.requesting) {
      return <BlockReserveLoading />;
    } else {
      return <ShowProject project={this.props.project.project} comments={this.props.project.project.project_comments} />
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
    project: state.single_project,
    requesting: state.requesting
  }
}

export default connect(mapStateToProps, {fetchSingleProject})(SingleProjectContainer)

//        <Route path="/posts/:id" render={() => <ShowPost posts={this.props.posts}/>}/>
// <PostComments comments={this.props.post.post_comments} />
