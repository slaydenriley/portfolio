import React from 'react'
class PostEditor extends React.Component {

  render() {

    return(
      <div className="post-editor">
        <h1>{this.props.post.post.title}</h1>
      </div>
    )
  }

}

export default PostEditor;
