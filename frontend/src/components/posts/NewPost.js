import React from 'react';

const NewPost = (props) => {
  return (
    <div>
      <h2>Create New Post</h2>
        <form className="new-post">
          <input type="text" name="title" placeholder="Post Title" required/><br/>
          <input type="text" name="image_link" placeholder="Featured Image Link" required/><br/>
          <select name="category" required>
            <option value="post">Post</option>
            <option value="project">Project</option>
          </select><br/>
          <select name="tag" required>
            <option value="null">None</option>
            <option value="ruby">Ruby</option>
            <option value="rails">Rails</option>
            <option value="sinatra">Sinatra</option>
            <option value="javascript">Javascript</option>
            <option value="react-redux">React/Redux</option>
          </select><br/>
          <input className="submit" type="submit" value="Publish"/>
        </form><br/>
    </div>
  )
}

export default NewPost;

//  <textarea name="content" placeholder="Begin Writing"/>
