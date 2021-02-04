import React, { Component } from 'react'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/EntryModal.module.css'


const initialState = {
  username: '',
  email: '',
  password: '',
  usernameOrEmail: '',
}


class EntryModal extends Component {
  state = {
    ...initialState
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(`${BACKEND_DOMAIN}/${this.props.entryType}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(response => response.json())
    ///////
      .then(json => console.log(JSON.stringify(json)))
    ///////

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


export default EntryModal
