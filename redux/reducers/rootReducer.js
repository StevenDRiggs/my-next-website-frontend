import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import errorsReducer from './errorsReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  posts: postsReducer,
  errors: errorsReducer,
})


export default rootReducer
