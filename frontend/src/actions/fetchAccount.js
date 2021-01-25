export default function fetchAccount(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(account => dispatch({
      type: 'FETCH_ACCOUNT',
      payload: account
    }))
  }
}
