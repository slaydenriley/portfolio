export default function deletePost(post) {
    return (dispatch) => {
        dispatch({ type: 'START_DELETING_POST' });
        fetch(`http://localhost:3001/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(res => dispatch({
          type: 'DELETE_POST',
          payload: res
        }))
    }
}
