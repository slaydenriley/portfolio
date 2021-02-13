import { Link } from 'react-router-dom';

const ProjectList = (props) => {
    return (
      <div>
        <hr className="line"/>
        <div>
          {props.posts.map(post =>
            <div key={post.id} className="post-list">
              <Link to={`/projects/${post.id}`}>
                <em>{post.title}</em>
                <hr className="line"/>
                <img src={`${post.image_link}`}/><br/>
              </Link>
            </div>)}
        </div>
      </div>
    );
}

export default ProjectList;
