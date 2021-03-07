import { store } from '../store/store'

import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


export const fetchAllPosts = () => {
  return dispatch => {
    const postsAction = fetch(`/posts`, {
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

      const postAction = fetch(`/posts/${slug}`, {
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

export const deletePost = (slug, confirmDelete) => {
  return dispatch => {
    const { user } = store.getState()

    if (user && user.user.is_admin) {
      const token = user.token

      const postAction = confirmDelete ?
        fetch(`/posts/${slug}`, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: {
              slug,
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
              type: 'DELETE_POST',
              payload: {
                posts,
              },
            })
          }
        }) :
        null

      return postAction
    } else {
      return null
    }
  }
}

export const newPost = (editFormInfo) => {
  return dispatch => {
    const { user } = store.getState()

    if (user && user.user.is_admin) {
      const token = user.token

      const postAction = fetch(`/posts`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
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
              type: 'NEW_POST',
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

