export default function fetchPosts(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(posts => dispatch({
      type: 'FETCH_POSTS',
      payload: posts
    }))
  }
}
