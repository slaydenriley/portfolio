import React from 'react';

const NewPost = (props) => {
  return (
    <div>
      <h2>Create New Post</h2>
        <form className="new-post">
          <input type="text" name="title" placeholder="Post Title" required/><br/>
          <select name="category" required>
            <option value="post">Post</option>
            <option value="project">Project</option>
          </select><br/>
          <input className="submit" type="submit" value="Publish"/>
        </form><br/>
    </div>
  )
}

export default NewPost;

//  <textarea name="content" placeholder="Begin Writing"/>
