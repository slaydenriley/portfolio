export default function singlePostReducer(state = [], action) {
  switch(action.type) {
    case 'START_FETCHING_POST':
      return {
        ...state,
        post: state.post,
        requesting: true
      }

    case 'FETCH_SINGLE_POST':
      return {
        state: action.payload,
        requesting: false
      }
      
    default:
      return state
  }
}
