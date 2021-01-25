import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import postReducer from './postReducer'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  posts: postReducer,
  projects: projectReducer
})

export default rootReducer
