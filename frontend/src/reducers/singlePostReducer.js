export default function singlePostReducer(state = { post: [], requesting: true }, action) {
  switch(action.type) {
    case 'START_FETCHING_POST':
      return {
        post: state.post,
        requesting: true
      }

    case 'FETCH_SINGLE_POST':
      return {
        post: action.payload,
        requesting: false
      }

    default:
      return state
  }
}
