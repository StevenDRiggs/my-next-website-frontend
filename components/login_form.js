import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../redux/actions/userActions'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


const initialState = {
  user: {
    usernameOrEmail: '',
    password: ''
  }
}


class LoginForm extends Component {
  state = {
    ...initialState,
  }

  handleChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { hideLoginForm, loginUser } = this.props

    debugger

    hideLoginForm()

    loginUser(this.state)

    this.setState({
      ...initialState,
    })
  }

  render() {
    const { user } = this.state
    const { usernameOrEmail, password } = user
    const { styles } = this.props

    return (
      <form id='loginForm' className={styles.form} onSubmit={this.handleSubmit} >
        <input type='text' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} placeholder='Username or Email' required />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' required />

        <button type='submit'>Log In</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: loginFormData => dispatch(loginUser(loginFormData)),
  }
}


export default connect(null, mapDispatchToProps)(LoginForm)
