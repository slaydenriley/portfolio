export default function fetchSinglePost(id) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_POST' });
    fetch(`http://localhost:3001/posts/${id}`)
    .then(resp => resp.json())
    .then(post => dispatch({
      type: 'FETCH_SINGLE_POST',
      payload: post
    }))
  }
}
