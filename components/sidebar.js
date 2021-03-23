import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { connect } from 'react-redux'

import { logoutUser } from '../redux/actions/userActions'
import LoginForm from './login_form'
import SignupForm from './signup_form'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Blog/Sidebar.module.css'


const initialState = {
  cancel: false,
}


class Sidebar extends Component {
  state = {
    ...initialState,
  }

  showCancelBtn = () => {
    this.setState({
      cancel: true,
    })
  }

  hideCancelBtn = () => {
    this.setState({
      cancel: false,
    })
  }

  showLoginForm = () => {
    this.showCancelBtn()

    const loginForm = document.querySelector('#loginForm')

    loginForm.style.display = 'flex'

    loginForm.querySelector('input').focus()
  }

  hideLoginForm = () => {
    const loginForm = document.querySelector('#loginForm')

    loginForm.style.display = 'none'

    Array.from(loginForm.children).forEach(child => child.blur())

    this.hideCancelBtn()
  }

  showSignupForm = () => {
    this.showCancelBtn()

    const signupForm = document.querySelector('#signupForm')

    signupForm.style.display = 'flex'

    signupForm.querySelector('input').focus()
  }

  hideSignupForm = () => {
    const signupForm = document.querySelector('#signupForm')

    signupForm.style.display = 'none'

    Array.from(signupForm.children).forEach(child => child.blur())

    this.hideCancelBtn()
  }

  loginBtn = event => {
    this.hideSignupForm()
    this.showLoginForm(event)
  }

  logoutBtn = event => {
    this.props.logoutUser()
  }

  signupLink = event => {
    event.preventDefault()

    this.hideLoginForm()
    this.showSignupForm()
  }

  hideForms = () => {
    this.hideLoginForm()
    this.hideSignupForm()

    this.hideCancelBtn()
  }

  render() {
    const { cancel } = this.state
    let { user } = this.props
    user = user ? user.user : user

    return (
      <div className={styles.sidebar}>
        {user && user.avatar_url ? <Image className={styles.avatar} src={user.avatar_url} alt={`${user.username} avatar`} width={100} height={100} /> : null}
        {user && user.username ? <h3>{user.username}</h3> : null}
        {user && Object.keys(user).length > 0
          ? <button className={styles.button} onClick={this.logoutBtn}>Log Out</button>
          : <>
            {cancel ?
              <button className={styles.cancelButton} onClick={this.hideForms}>Cancel</button>
              :
              <button className={styles.button} onClick={this.loginBtn}>Log In</button>
            }
            <h6>Don't have an account? <a className={styles.link} href='' onClick={this.signupLink}>Sign up</a> instead.</h6>
          </>
        }
        <LoginForm styles={styles} hideLoginForm={this.hideLoginForm} />
        <SignupForm styles={styles} hideSignupForm={this.hideSignupForm} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
