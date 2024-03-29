import baseUrl from "../BaseUrl";

export default function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS" });
    fetch(`${baseUrl}/posts`)
      .then((resp) => resp.json())
      .then((posts) =>
        dispatch({
          type: "FETCH_POSTS",
          payload: posts,
        })
      );
  };
}
