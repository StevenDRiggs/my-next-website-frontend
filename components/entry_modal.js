import React, { Component } from 'react'
import { useCookies } from 'react-cookie'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/EntryModal.module.css'


const initialState = {
  username: '',
  email: '',
  password: '',
  usernameOrEmail: '',
}

const withCookies = Comp => {
  return function WrappedComponent(props) {
    const [ cookies, setCookie, removeCookie ] = useCookies(['sessionInfo'])
    return <Comp {...props} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
  }
}

class EntryModal extends Component {
  state = {
    ...initialState,
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { entryType, setCookie, setAdmin } = this.props

    try {
      const response = await fetch(`${BACKEND_DOMAIN}/${entryType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: this.state
        })
      })
      const data = await response.json()

      setCookie('sessionInfo', JSON.stringify({
        token: data.token
      }), {
        path: '/',
        maxAge: 7200,
        sameSite: true,
        secure: true
      })

      setAdmin(data.user.is_admin)

    } catch(error) {
      console.log(error)
    }

    this.setState({
      ...initialState,
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { username, email, password, usernameOrEmail } = this.state
    const { entryType } = this.props

    return (
      <div className={styles.modal}>
        <form onSubmit={this.handleSubmit}>
          {entryType === 'signup' ?
            <>
              <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username' required />
              <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' required />
            </> :
            <input type='text' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} placeholder='Username or Email' required />
          }
          <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' required />

          <button type='submit'>{entryType === 'signup' ? 'Sign up' : 'Log in'}</button>
        </form>
      </div>
    )
  }
}

export default withCookies(EntryModal)
