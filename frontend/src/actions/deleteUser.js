export default function deleteUser(id) {
  return (dispatch) => {
    dispatch({ type: "START_DELETING_USER" });
    fetch(`${process.env.API_BASE_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((users) =>
        dispatch({
          type: "FETCH_USERS",
          payload: users,
        })
      );
  };
}
