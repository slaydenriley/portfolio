import baseUrl from "../BaseUrl";

export default function addNewPost(formData) {
  return (dispatch) => {
    dispatch({ type: "START_POSTING_POST" });
    fetch(`${baseUrl}/posts`, {
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
