import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../../actions/fetchPosts'
import ProjectList from '../../components/projects/ProjectList'

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <ProjectList posts={this.props.posts.filter(project => project.category === "project")} title_name="Projects" />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(ProjectsContainer)
