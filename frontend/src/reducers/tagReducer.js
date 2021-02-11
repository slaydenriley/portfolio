export default function tagReducer(state = { tags: []}, action) {
  switch(action.type) {
    case 'FETCH_TAGS':
      return {
        tags: action.payload,
      }

    case 'POST_TAGS':
      return {
        tags: action.payload
      }


    default:
      return state
  }
}
