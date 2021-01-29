export default function accountReducer(state = { account: [], logged_in: false }, action) {
  switch(action.type) {
    case 'FETCH_ACCOUNT':
      return action.payload

    case "LOGIN_USER":
      return action.payload

    default:
      return state
  }
}
