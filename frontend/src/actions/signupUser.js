export default function signupUser(formData) {
  return (dispatch) => {
    dispatch({ type: "START_SIGNUP" });
    fetch(`${process.env.API_BASE_URL}/signup`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => dispatch({ type: "SIGNUP_USER", payload: res }));
  };
}
