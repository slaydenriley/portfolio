export default function logout() {
  return (dispatch) => {
    fetch(`${process.env.API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "LOGOUT_USER", payload: res }));
  };
}
