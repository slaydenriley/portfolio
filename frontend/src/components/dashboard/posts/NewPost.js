import React from 'react';

const NewPost = (props) => {
  return (
    <div>
      <h2>Create New Post</h2>
        <form className="new-post">
          <input type="text" name="title" placeholder="Post Title"/>
            <br/>
            <br/>

            <br/>
            <br/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default NewPost;

//  <textarea name="content" placeholder="Begin Writing"/>
