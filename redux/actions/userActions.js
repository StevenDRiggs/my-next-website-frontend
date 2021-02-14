import BACKEND_DOMAIN from '../../BACKEND_DOMAIN'


export const loginUser = loginFormInfo => {
  return dispatch => {
    fetch(`${BACKEND_DOMAIN}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFormInfo)
    })
    .then(response => response.json())
    .then(data => dispatch({
      type: 'LOGIN_USER',
      user: data.user,
      token: data.token,
    }))
  }
}

