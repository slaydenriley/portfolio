import React from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component {

  render() {
    return (
      <div className="posts">
        <h1>{this.props.title_name}</h1>
        {this.props.posts.map(post =>
          <div key={post.id} className="post-list">
            <Link key={post.id} to={`/projects/${post.id}`}><h3><em>{post.title}</em></h3></Link>
          </div>)}
      </div>
    );
  }
}

export default ProjectList;
