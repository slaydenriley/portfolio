export default function singlePostReducer(state = { post: [], requesting: true, redirectToNewPage: false }, action) {
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

    case 'START_POSTING_POST':
      return {
        post: state.post,
        requesting: true
      }

    case 'POST_POST':
      return {
        post: action.payload,
        requesting: false,
        redirectToNewPage: true
      }

    case 'START_EDIT_POST':
      return {
        requesting: true,
        redirectToNewPage: false
      }

    case 'EDIT_POST':
      return {
        requesting: false,
        redirectToNewPage: true,
        post: action.payload
      }

    default:
      return state
  }
}
