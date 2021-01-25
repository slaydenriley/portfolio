export default function postReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload

    case 'FETCH_POST_COMMENTS':
      return action.payload

    default:
      return state
  }
}
