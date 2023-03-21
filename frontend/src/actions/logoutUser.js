import baseUrl from "../BaseUrl";

export default function logout() {
  return (dispatch) => {
    fetch(`${baseUrl}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "LOGOUT_USER", payload: res }));
  };
}
