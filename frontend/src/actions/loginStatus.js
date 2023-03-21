import baseUrl from "../BaseUrl";

export default function loginStatus() {
  return (dispatch) => {
    dispatch({ type: "START_LOGIN_STATUS" });
    fetch(`${baseUrl}/logged_in`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "LOGIN_STATUS", payload: res }));
  };
}

//dispatch({type: 'LOGIN_USER', payload: user})
