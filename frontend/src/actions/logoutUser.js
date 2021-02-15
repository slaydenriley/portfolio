export default function logout() {
    return (dispatch) => {
        fetch(`http://localhost:3001/logout`, {method: "POST", credentials: 'include'})
        .then(res => res.json())
        .then(res => dispatch({type: 'LOGOUT_USER', payload: res}))
    }
}
