import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


export const loginUser = loginFormData => {
  return dispatch => {
    const userAction = fetch(`${BACKEND_DOMAIN}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFormData)
    })
    .then(response => response.json())
    .then(data => dispatch({
      type: 'LOGIN_USER',
      user: data.user,
      token: data.token,
    }))

    return userAction
  }
}

export const logoutUser = () => {
  return dispatch => {
    fetch(`${BACKEND_DOMAIN}/logout`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return dispatch({
      type: 'LOGOUT_USER',
    })
  }
}

export const signupUser = signupFormData => {
  return dispatch => {
    const userAction = fetch(`${BACKEND_DOMAIN}/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupFormData)
    })
    .then(response => response.json())
    .then(data => dispatch({
      type: 'SIGNUP_USER',
      user: data.user,
      token: data.token,
    }))

    return userAction
  }
}

