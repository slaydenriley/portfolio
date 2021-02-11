import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import postReducer from './postReducer'
import singlePostReducer from './singlePostReducer'
import tagReducer from './tagReducer'


const rootReducer = combineReducers({
  account: accountReducer,
  posts: postReducer,
  single_post: singlePostReducer,
  tags: tagReducer
})

export default rootReducer
