export default function userReducer(state = { users: [], requesting: false}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {
        users: action.payload,
      }

    default:
      return state
  }
}
