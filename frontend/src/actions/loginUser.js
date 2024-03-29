import baseUrl from "../BaseUrl";

export default function loginUser(formData) {
  return (dispatch) => {
    dispatch({ type: "START_LOGIN" });
    fetch(`${baseUrl}/login`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "LOGIN_USER", payload: res }));
  };
}

//dispatch({type: 'LOGIN_USER', payload: user})
