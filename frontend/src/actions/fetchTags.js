export default function fetchTags(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/tags')
    .then(resp => resp.json())
    .then(tags => dispatch({
      type: 'FETCH_TAGS',
      payload: tags
    }))
  }
}
