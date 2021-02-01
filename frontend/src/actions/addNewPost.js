export default function addNewPost(formData) {
    return (dispatch) => {
        fetch(`http://localhost:3001/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(post => console.log(post))
    }
}
