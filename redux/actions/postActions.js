import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


export const fetchAllPosts = () => {
  return dispatch => {
    const postsAction = fetch(`${BACKEND_DOMAIN}/posts`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }})
      .then(response => response.json())
      .then(posts => dispatch({
        type: 'FETCH_ALL_POSTS',
        payload: {
          posts,
        }
      }))
    return postsAction
  }
}


