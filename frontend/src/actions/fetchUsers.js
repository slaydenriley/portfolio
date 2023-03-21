import baseUrl from "../BaseUrl";

export default function fetchUsers(action) {
  return (dispatch) => {
    fetch(`${baseUrl}/users`)
      .then((resp) => resp.json())
      .then((users) =>
        dispatch({
          type: "FETCH_USERS",
          payload: users,
        })
      );
  };
}
