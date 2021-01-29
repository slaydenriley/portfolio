import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import postReducer from './postReducer'
import projectReducer from './projectReducer'
import singlePostReducer from './singlePostReducer'
import singleProjectReducer from './singleProjectReducer'

const rootReducer = combineReducers({
  account: accountReducer,
  posts: postReducer,
  single_post: singlePostReducer,
  projects: projectReducer,
  single_project: singleProjectReducer
})

export default rootReducer
