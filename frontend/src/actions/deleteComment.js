export default function deleteComment(id, post_id) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_POST' });
        fetch(`http://localhost:3001/comments/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(post_id)
        })
        .then(res => res.json())
        .then(post => dispatch({
          type: 'FETCH_SINGLE_POST',
          payload: post
        }))
    }
}


/* .then(post => dispatch({
  type: 'FETCH_SINGLE_POST',
  payload: post
}))

*/
