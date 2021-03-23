import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signupUser } from '../redux/actions/userActions'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


const initialState = {
  user: {
    username: '',
    email: '',
    password: ''
  }
}


class SignupForm extends Component {
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

    const { hideSignupForm, signupUser } = this.props

    hideSignupForm()

    signupUser(this.state)

    this.setState({
      ...initialState,
    })
  }

  render() {
    const { user } = this.state
    const { username, email, password } = user
    const { styles } = this.props

    return (
      <form id='signupForm' className={styles.form} onSubmit={this.handleSubmit} >
        <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username' required />
        <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' required />
        <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' required />

        <button type='submit' className={styles.button}>Sign Up</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    signupUser: signupFormData => dispatch(signupUser(signupFormData)),
  }
}
export default connect(null, mapDispatchToProps)(SignupForm)
