import React, { Component } from 'react'
import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


const initialState = {
    usernameOrEmail: '',
    password: ''
}


class LoginForm extends Component {
    state = {
        ...initialState,
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { setUser, setCookie, hideLoginForm } = this.props

        hideLoginForm()

        const response = await fetch(`${BACKEND_DOMAIN}/login`, {
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
            path: '/blog/',
            maxAge: 7200,
            sameSite: true,
            secure: true
        })

        setUser(data.user)

        this.setState({
            ...initialState,
        })
    }

    render() {
        const { usernameOrEmail, password } = this.state
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


export default LoginForm