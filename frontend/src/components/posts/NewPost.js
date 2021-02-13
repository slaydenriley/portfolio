const NewPost = (props) => {

  return (
    <div>
    <h1>Create New Post</h1>
    <div>
        <div>
          <form>
            <input type="text" name="title" placeholder="Post Title" required/><br/>
            <input type="text" name="image_link" placeholder="Featured Image Link" required/><br/>
            <select name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <input className="submit" type="submit" value="Publish"/>
          </form>
        </div><br/>

        <div className="post-filters">
            {props.tags.map(tag =>
                <label className="tag-submit checkboxes">
                  <input className="checkbox" type="checkbox" name="tags" value={tag.id}/><br/>
                  {tag.name.toUpperCase()}
                </label>
            )}
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


{props.tags.map(tag =>
    <label className="submit checkboxes">
        {tag.name.toUpperCase()}<br/>
        <input type="checkbox" name="tags" value={tag.id}/>
      </label>
)}
*/
