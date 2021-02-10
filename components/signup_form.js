import React, { Component } from 'react'
import BACKEND_DOMAIN from '../BACKEND_DOMAIN'


const initialState = {
    username: '',
    email: '',
    password: ''
}


class SignupForm extends Component {
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

        const { setUser, setCookie, hideSignupForm } = this.props

        hideSignupForm()

        const response = await fetch(`${BACKEND_DOMAIN}/signup`, {
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
        const { username, email, password } = this.state
        const { styles } = this.props

        return (
            <form id='signupForm' className={styles.form} onSubmit={this.handleSubmit} >
                <input type='text' name='username' value={username} onChange={this.handleChange} placeholder='Username' required />
                <input type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' required />
                <input type='password' name='password' value={password} onChange={this.handleChange} placeholder='Password' required />

                <button type='submit'>Sign Up</button>
            </form>
        )
    }
}


export default SignupForm