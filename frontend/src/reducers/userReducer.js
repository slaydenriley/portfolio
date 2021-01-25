export default function userReducer(state = {users: {}}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {
        users: action.payload
      }


    case 'LOGIN':
      return {
        users: action.user,
      }

    default:
      return state
  }
}
