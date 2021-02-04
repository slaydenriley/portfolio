const DeleteComment = props => {

  return (
    <form name="id" id={props.comment.id}>
      <input type="submit" value="Delete"/>
    </form>
  )
}

export default DeleteComment
