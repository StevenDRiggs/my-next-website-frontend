import { HYDRATE } from 'next-redux-wrapper'


const usersReducer = (state={}, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload.user}
    case 'LOGIN':
      return {
        user: action.user,
        token: action.token,
      }
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}


export default usersReducer
