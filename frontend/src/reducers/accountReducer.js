export default function accountReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_ACCOUNT':
      return action.payload

    default:
      return state
  }
}
