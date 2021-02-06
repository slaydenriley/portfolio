const EditPostList = (props) => {


    return (
      <div className="posts">
        <h1>Please select a post to edit...</h1>
        <h1>{props.title_name}</h1>
        {props.posts.map(post =>
          <div key={post.id} className="post-list">
            <button value={post.id}>{post.title}</button>
          </div>)}
      </div>
    );
  }


export default EditPostList;
