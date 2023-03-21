export default function addNewPost(formData) {
  return (dispatch) => {
    dispatch({ type: "START_POSTING_POST" });
    fetch(`${process.env.API_BASE_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((post) =>
        dispatch({
          type: "POST_POST",
          payload: post,
        })
      );
  };
}
