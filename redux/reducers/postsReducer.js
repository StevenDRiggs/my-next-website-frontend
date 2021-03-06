import { HYDRATE } from 'next-redux-wrapper'


const postsReducer = (state=[], action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts
    case 'FETCH_ALL_POSTS':
      return action.payload.posts
    case 'NEW_POST':
      return action.payload.posts
    case 'UPDATE_POST':
      return action.payload.posts
    case 'DELETE_POST':
      return action.payload.posts
    default:
      return state
  }
}


export default postsReducer

