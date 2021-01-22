export default function userReducer(state = {accounts: []}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {users: action.payload}
    default:
      return state
  }
}
