export default function fetchUsers(action) {
  return (dispatch) => {
    fetch("${process.env.API_BASE_URL}/users")
      .then((resp) => resp.json())
      .then((users) =>
        dispatch({
          type: "FETCH_USERS",
          payload: users,
        })
      );
  };
}
