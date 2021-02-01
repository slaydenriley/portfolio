import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const NewPost = (props) => {
  return (
    <div class="new-post">
      <h2>Create New Post</h2>
      <input type="text" name="title" placeholder="Post Title"/>
      <br/>
      <br/>

      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="textEditor"
      
      />
      <br/>
      <br/>
      <input type="submit"/>
    </div>
  )
}

export default NewPost;
