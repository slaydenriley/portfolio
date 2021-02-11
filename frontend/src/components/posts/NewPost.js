import React from 'react';

const NewPost = (props) => {
  return (
    <div>
    <h1>Create New Post</h1>
    <div className="new-post-container">
        <div className="row-1">
          <form className="">
            <input type="text" name="title" placeholder="Post Title" required/><br/>
            <input type="text" name="image_link" placeholder="Featured Image Link" required/><br/>
            <select name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <input className="submit" type="submit" value="Publish"/>
          </form><br/>
        </div>

        <div className="row-2">
          <form>
            {props.tags.map(tag =>
              <label>
                {tag.name.toUpperCase()}
                  <input type="checkbox" name="tags" value={tag.name}/>
              </label>
            )}<br/>
              <input type="text" name="tags" placeholder="Add New Tag"/><br/>
              <input type="submit" name="submit-new-tag" value="Add"/>
          </form><br/>
        </div>
    </div>
    </div>
  )
}

export default NewPost;


/*
<select name="tag" required>
  <option value="null">None</option>
  <option value="ruby">Ruby</option>
  <option value="rails">Rails</option>
  <option value="sinatra">Sinatra</option>
  <option value="javascript">Javascript</option>
  <option value="react-redux">React/Redux</option>
</select><br/>
*/
