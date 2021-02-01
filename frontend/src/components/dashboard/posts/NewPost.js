import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const NewPost = (props) => {
  return (
    <div>
      <h2>Create New Post</h2>
        <form className="new-post">
          <input type="text" name="title" placeholder="Post Title"/>
            <br/>
            <br/>
          <textarea name="content" placeholder="Begin Writing"/>
            <br/>
            <br/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default NewPost;
