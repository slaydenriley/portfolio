export default function deleteComment(formData) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCHING_POST' });
        fetch(`http://localhost:3001/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(formData)
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
