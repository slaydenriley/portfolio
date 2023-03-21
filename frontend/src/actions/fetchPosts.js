export default function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS" });
    fetch("${process.env.API_BASE_URL}/posts")
      .then((resp) => resp.json())
      .then((posts) =>
        dispatch({
          type: "FETCH_POSTS",
          payload: posts,
        })
      );
  };
}
