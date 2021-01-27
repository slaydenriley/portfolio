export default function singlePostReducer(state = [], action) {
  switch(action.type) {

    case 'FETCH_SINGLE_POST':
      return action.payload

    default:
      return state
  }
}
