export default function userReducer(state = {current: {}}, action) {
  switch(action.type) {
    case 'FETCH_USERS':
      return {
        current: action.payload
      }


    case 'LOGIN':
      return {
        current: action.user,
      }

    default:
      return state
  }
}
