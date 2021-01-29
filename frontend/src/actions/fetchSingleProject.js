export default function fetchSingleProject(id) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_PROJECT' });
    fetch(`http://localhost:3001/projects/${id}`)
    .then(resp => resp.json())
    .then(project => dispatch({
      type: 'FETCH_SINGLE_PROJECT',
      payload: project
    }))
  }
}
