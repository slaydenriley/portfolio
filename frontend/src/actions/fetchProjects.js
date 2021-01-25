export default function fetchProjects(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/projects')
    .then(resp => resp.json())
    .then(projects => dispatch({
      type: 'FETCH_PROJECTS',
      payload: projects
    }))
  }
}
