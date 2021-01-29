export default function singleProjectReducer(state = { project: [], requesting: true }, action) {
  switch(action.type) {
    case 'START_FETCHING_PROJECT':
      return {
        project: state.project,
        requesting: true
      }

    case 'FETCH_SINGLE_PROJECT':
      return {
        project: action.payload,
        requesting: false
      }

    default:
      return state
  }
}
