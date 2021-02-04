const DeleteComment = props => {

  if (props.user_id === props.comment.user_id) {
    return (
      <form name="id" id={props.comment.id}>
        <input type="submit" value="Delete"/>
        </form>
      )
    }
  else {
    return null
  }
}

export default DeleteComment
