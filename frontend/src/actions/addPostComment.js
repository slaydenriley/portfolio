export default function addPostComment(formData) {
    return (dispatch) => {
        fetch(`http://localhost:3001/posts/${formData.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => dispatch({type: '', payload: user}))
    }
}
