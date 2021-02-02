export default function addPostComment(formData) {
    return (dispatch) => {
        fetch(`http://localhost:3001/posts/${formData.post_id}/comments`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(comment => console.log(comment))
    }
}
