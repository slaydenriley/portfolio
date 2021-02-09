import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PostEditor = (props) => {

      return (
        <div>
          <h1>Edit {props.post.title}</h1>
            <input type="text" name="title" defaultValue={props.post.title}/><br/>
            <select value={props.post.category} name="category" required>
              <option value="post">Post</option>
              <option value="project">Project</option>
            </select><br/>
            <input className="submit" type="submit" value="Updated Post"/><br/><br/>
        </div>
      )
    }

export default PostEditor
