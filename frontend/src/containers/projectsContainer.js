import React from 'react'
import {connect} from 'react-redux'

import fetchProjects from '../actions/fetchProjects'
import Projects from '../components/Projects'

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        <Projects projects={this.props.projects} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer)
