import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import postsReducer from './postsReducer'


const rootReducer = combineReducers({
  user: usersReducer,
  posts: postsReducer,
})


export default rootReducer
