export default function loginUser(formData) {
    return (dispatch) => {
        fetch(`http://localhost:3001/login`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        .then(res => res.json())
        .then(user => dispatch({type: 'LOGIN_USER', payload: user}))
    }
}

//dispatch({type: 'LOGIN_USER', payload: user})
