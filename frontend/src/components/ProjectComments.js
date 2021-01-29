const ProjectComments = (props) => {

    <div>
      <h2><u>Comments</u></h2>
        {props.comments.map(comment =>
            <div className="post-comment" key={comment.id}>
            <em>{comment.author_name}</em>
            <p>{comment.content}</p>
            </div>)
          }

      <input type="text">Add New Comment</input>
      <input type="submit">Post</input>
    </div>

}

export default ProjectComments

/*
{props.account.map(user =>
  <div key={user.id}>
    <em>Logged in: {user.name}</em>
    <h2>Description</h2>
    <p>{user.description}</p>
    <h2>Email</h2>
    <a href={"mailto:" + user.email}>{user.email}</a>
  </div>)}
  */
