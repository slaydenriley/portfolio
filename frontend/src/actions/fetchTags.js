export default function fetchTags() {
  return (dispatch) => {
    dispatch({ type: "START_FETCH_TAGS" });
    fetch("${process.env.API_BASE_URL}/tags")
      .then((resp) => resp.json())
      .then((tags) =>
        dispatch({
          type: "FETCH_TAGS",
          payload: tags,
        })
      );
  };
}
