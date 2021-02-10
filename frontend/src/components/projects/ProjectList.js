import React from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component {

  render() {
    return (
      <div>
        <hr className="line"/>
        <div className="all-project-cards">
          {this.props.posts.map(post =>
            <Link key={post.id} className="single-project-card" to={`/projects/${post.id}`}>
              <h2><em>{post.title}</em></h2>
            </Link>)}
        </div>
      </div>
    );
  }
}

export default ProjectList;
