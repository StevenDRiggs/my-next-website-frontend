import React, { Component } from 'react'
import { useCookies } from 'react-cookie'
import Image from 'next/image'
import Link from 'next/link'

import LoginForm from './login_form'
import SignupForm from './signup_form'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Blog/Sidebar.module.css'


const withCookies = Comp => {
    return function WrappedComponent({ props }) {
        const [ cookies, setCookie, removeCookie ] = useCookies(['sessionInfo'])
        return <Comp {...props} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} />
    }
}


class Sidebar extends Component {
    showLoginForm = () => {
        const loginForm = document.querySelector('#loginForm')

        loginForm.style.display = 'block'

        loginForm.querySelector('input').focus()
    }

    hideLoginForm = () => {
        const loginForm = document.querySelector('#loginForm')

        loginForm.style.display = 'none'
    }

    showSignupForm = () => {
        const signupForm = document.querySelector('#signupForm')

        signupForm.style.display = 'block'
    }

    hideSignupForm = () => {
        const signupForm = document.querySelector('#signupForm')

        signupForm.style.display = 'none'
    }

    loginBtn = event => {
        this.hideSignupForm()
        this.showLoginForm()
    }

    logoutBtn = async event => {
        const { setUser, removeCookie } = this.props

        removeCookie('sessionInfo')
        setUser(null)

        await fetch(`${BACKEND_DOMAIN}/logout`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    signupLink = event => {
        event.preventDefault()
        
        this.hideLoginForm()
        this.showSignupForm()
    }

    render() {
        const { user, setUser, setCookie } = this.props

        return (
            <div className={styles.sidebar}>
                {user && user.avatar_url ? <Image className={styles.avatar} src={user.avatar_url} alt={`${user.username} avatar`} width={100} height={100} /> : null}
                {user ? <h3>{user.username}</h3> : null}
                {user
                    ? <button className={styles.button} onClick={this.logoutBtn}>Log Out</button>
                    : <>
                        <button className={styles.button} onClick={this.loginBtn}>Log In</button>
                        <h6>Don't have an account? <a className={styles.link} href='' onClick={this.signupLink}>Sign up</a> instead.</h6>
                    </>
                }
                <LoginForm styles={styles} setUser={setUser} setCookie={setCookie} hideLoginForm={this.hideLoginForm} />
                <SignupForm styles={styles} setUser={setUser} setCookie={setCookie} hideSignupForm={this.hideSignupForm} />
            </div>
        )
    }
}


export default withCookies(Sidebar)