import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PostEditor = (props) => {

      return (
        <div>
          <h1>{props.post.title}</h1>
            <select name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <em>Previous category: {props.post.category}</em><br/>
            <input className="submit" type="submit" value="Updated Post"/><br/><br/>
        </div>
      )
    }

export default PostEditor
