import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PostEditor = (props) => {

      return (
        <div>
          <h1>Edit {props.post.title}</h1>
            <input type="text" name="title" defaultValue={props.post.title}/><br/>
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
