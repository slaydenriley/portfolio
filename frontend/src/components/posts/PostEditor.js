import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PostEditor = (props) => {

      return (
        <div>
          <h1>Edit {props.post.title}</h1>
            <input type="text" name="title" defaultValue={props.post.title}/><br/>
            <input type="text" name="image_link" defaultValue={props.post.image_link} placeholder="Image Link"/><br/>
            <select defaultValue={props.post.category} name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <select defaultValue={props.post.tag} name="tag" required>
              <option value="null">None</option>
              <option value="ruby">Ruby</option>
              <option value="rails">Rails</option>
              <option value="sinatra">Sinatra</option>
              <option value="javascript">Javascript</option>
              <option value="react-redux">React/Redux</option>
            </select><br/>
            <input className="submit" type="submit" value="Updated Post"/><br/><br/>
        </div>
      )
    }

export default PostEditor
