
const CommentInput = props => {

  return (
    <div className="comment-input">
      <form>
        <h2>Add New Comment</h2>
          <input type="text" placeholder="Your Name"/><br/>
          <input type="text" placeholder="Your Email"/><br/>
          <textarea placeholder="What do you think?"/><br/>
          <input type="submit"/>
      </form>
    </div>
  )
};

export default CommentInput

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
