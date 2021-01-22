export default function fetchUsers(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(users => dispatch({
      type: 'FETCH_USERS',
      payload: users
    }))
  }
}
