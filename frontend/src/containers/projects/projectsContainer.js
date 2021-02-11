import React from 'react'
import {connect} from 'react-redux'

import fetchPosts from '../../actions/fetchPosts'
import fetchTags from '../../actions/fetchTags'
import ProjectList from '../../components/projects/ProjectList'
import ProjectFilter from '../../components/projects/ProjectFilter'

class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts.filter(project => project.category === "project"),
      tags: this.props.tags
    }
  }

  componentDidMount() {
    this.props.fetchTags()
    this.props.fetchPosts()
    this.setState({
      posts: this.props.posts,
      tags: this.props.tags
    })
  }

  componentWillReceiveProps() {
    this.setState({
      posts: this.props.posts.filter(project => project.category === "project"),
      tags: this.props.tags
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
        posts: this.props.posts.filter(project =>
          project.tags.find(tag => tag.name.includes(event.target.value)))
      })
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="posts">
        <h1>Projects</h1>
        <em>These are my portfolio projects from my time at Flatiron School.</em>
        <div onClick={this.handleClick}>
          <ProjectFilter active={this.state.active} tags={this.state.tags}/>
        </div>

        <div>
          <ProjectList posts={this.state.posts}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts.posts.filter(project => project.category === "project"),
    tags: state.tags.tags
  }
}

export default connect(mapStateToProps, {fetchPosts, fetchTags})(ProjectsContainer)
