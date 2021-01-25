import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  posts: postReducer,
})

export default rootReducer
