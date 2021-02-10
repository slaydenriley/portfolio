import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../../actions/fetchPosts'
import ProjectList from '../../components/projects/ProjectList'
import ProjectFilter from '../../components/projects/ProjectFilter'

class ProjectsContainer extends React.Component {

  state = {
    posts: this.props.posts.filter(project => project.category === "project")
  }

  componentDidMount() {
    this.props.fetchPosts()
    this.setState({
      posts: this.props.posts
    })
  }

  handleClick = (event) => {
    if (event.target.value === "all") {
      this.setState({
        posts: this.props.posts.filter(project => project.category === "project")
      })
    }
    else {
      this.setState({
        posts: this.props.posts.filter(project => project.tag === event.target.value)
      })
    }
  }

  render() {
    return (
      <div className="posts">
        <h1>Projects</h1>
        <em>These are my portfolio projects from my time at Flatiron School.</em>
        <div onClick={this.handleClick}>
          <ProjectFilter />
        </div>

        <div>
          <ProjectList posts={this.state.posts} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts.posts.filter(project => project.category === "project")
  }
}

export default connect(mapStateToProps, {fetchPosts})(ProjectsContainer)
