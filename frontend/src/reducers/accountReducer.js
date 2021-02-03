export default function accountReducer(state = { account: [], logged_in: false }, action) {
  switch(action.type) {
    case 'FETCH_ACCOUNT':
      return action.payload

    case "LOGIN_USER":
      return {
        account: action.payload,
        logged_in: true
      }

    case "LOGOUT_USER":
      return {
        account: [],
        logged_in: false
      }

    case "LOGIN_STATUS":
      return {
        account: action.payload.user,
        logged_in: action.payload.logged_in
      }


    default:
      return state
  }
}
