export default function addNewPost(formData) {
  return (dispatch) => {
    dispatch({ type: "START_EDIT_POST" });
    fetch(`${process.env.API_BASE_URL}/posts/${formData.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((post) =>
        dispatch({
          type: "EDIT_POST",
          payload: post,
        })
      );
  };
}
