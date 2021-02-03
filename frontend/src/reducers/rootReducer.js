import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import postReducer from './postReducer'
import singlePostReducer from './singlePostReducer'


const rootReducer = combineReducers({
  account: accountReducer,
  posts: postReducer,
  single_post: singlePostReducer
})

export default rootReducer
