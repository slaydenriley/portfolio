export default function addNewPost(tag) {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_TAG' });
        fetch(`http://localhost:3001/tags`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(tag)
        })
        .then(res => res.json())
        .then(tags => dispatch({
          type: 'POST_TAG',
          payload: tags
        }))
      }
    }
