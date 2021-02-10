import React from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component {

  render() {
    return (
      <div>
        <hr className="line"/>
        <div>
          {this.props.posts.map(post =>
            <div key={post.id} className="post-list">
              <Link to={`/projects/${post.id}`}>
                <h2><em>{post.title}</em></h2>
                <img src={`${post.image_link}`}/><br/>
              </Link>
            </div>)}
        </div>
      </div>
    );
  }
}

export default ProjectList;
