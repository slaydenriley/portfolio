export default function fetchSinglePost(id) {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POST" });
    fetch(`${process.env.API_BASE_URL}/posts/${id}`)
      .then((resp) => resp.json())
      .then((post) =>
        dispatch({
          type: "FETCH_SINGLE_POST",
          payload: post,
        })
      );
  };
}
