import React from 'react'

const CommentInput = () => {

    return(
      <div className="comment-input">
        <form>
          <h2>Add New Comment</h2>
            <textarea name="content" placeholder="What do you think?"/><br/>
            <input className="submit" type="submit"/>
          </form>
      </div>
    )
}

export default CommentInput;
