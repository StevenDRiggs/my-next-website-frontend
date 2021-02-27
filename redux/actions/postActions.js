import { store } from '../store/store'

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
      .then(posts => {
        if (posts.errors) {
          dispatch({
            type: 'PROCESS_ERRORS',
            payload: {
              errors: posts.errors,
            },
          })
        } else {
          dispatch({
            type: 'FETCH_ALL_POSTS',
            payload: {
              posts,
            },
          })
        }
      })

    return postsAction
  }
}

export const updatePost = (slug, editFormInfo) => {
  return dispatch => {
    const { user } = store.getState()

    if (user && user.user.is_admin) {
      const token = user.token

      const postAction = fetch(`${BACKEND_DOMAIN}/posts/${slug}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            slug,
            ...editFormInfo,
          },
        }),
      })
        .then(response => response.json())
        .then(posts => {
          if (posts.errors) {
            dispatch({
              type: 'PROCESS_ERRORS',
              payload: {
                errors: posts.errors,
              },
            })
          } else {
            dispatch({
              type: 'UPDATE_POST',
              payload: {
                posts,
              },
            })
          }
        })

      return postAction
    } else {
      return null
    }
  }
}

