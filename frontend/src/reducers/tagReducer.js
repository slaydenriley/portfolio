export default function tagReducer(state = { tags: [], requesting: false}, action) {
  switch(action.type) {
    case 'FETCH_TAGS':
      return {
        tags: action.payload,
      }

    case 'POST_TAGS':
      return {
        tags: action.payload
      }

    case 'START_ADDING_TAG':
      return {
        ...state,
        requesting: true
      }

    case 'POST_TAG':
      return {
        tags: action.payload,
        requesting: false
      }

    default:
      return state
  }
}
