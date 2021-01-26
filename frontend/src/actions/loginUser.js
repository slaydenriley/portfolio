export default function loginUser(action) {
  return (dispatch) => {
    fetch('http://localhost:3001/login', {method: 'post', body: JSON.stringify(opts))
    .then(resp => resp.json())
    .then(account => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }))
  }
}
