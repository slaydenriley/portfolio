export default function accountReducer(state = {logged_in: false, errors: null, requesting: false }, action) {
  switch(action.type) {
    case 'FETCH_ACCOUNT':
      return action.payload

    case "START_LOGIN":
      return {
        requesting: true
      }

    case "LOGIN_USER":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in,
        errors: action.payload.errors,
        requesting: false
      }

    case "START_SIGNUP":
      return {
        requesting: true
      }

    case "SIGNUP_USER":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in,
        errors: action.payload.errors,
        requesting: false
      }

    case "LOGOUT_USER":
      return {
        account: [],
        logged_in: false
      }

    case "LOGIN_STATUS":
      return {
        user: action.payload.user,
        logged_in: action.payload.logged_in
      }

    default:
      return state
  }
}
