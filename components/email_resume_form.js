import React, { Component } from 'react'

import BACKEND_DOMAIN from '../BACKEND_DOMAIN'

import styles from '../styles/Blog/index.module.css'


const initialState = {
  name: '',
  email: '',
}


class EmailResumeForm extends Component {
  state = {
    ...initialState,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { hideEmailFormBtn } = this.props

    hideEmailFormBtn()

    fetch(`${BACKEND_DOMAIN}/resume`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(json => alert(`Thank you for your interest, ${json.name}!\nA copy of my resume has been sent to ${json.email}.`))
      .catch(error => {
        let error_msg

        if (error.errno === 'ECONNREFUSED') {
          error_msg = 'Error communicating with server'
        } else {
          error_msg = error.message
        }

        alert(`${error_msg}\nPlease try again later.`)
      })

    this.setState({
      ...initialState,
    })


  }

  render() {
    const { name, email } = this.state
    const { hideEmailFormBtn } = this.props

    return (
      <form id='emailForm' className={styles.popupForm} onSubmit={this.handleSubmit} >
        <input className={styles.formInput} type='text' name='name' value={name} onChange={this.handleChange} placeholder='Name' required />
        <input className={styles.formInput} type='email' name='email' value={email} onChange={this.handleChange} placeholder='Email' required />

        <button type='submit' className={styles.formSubmitButton}>Send It</button>
        <button type='button' className={styles.cancelButton} onClick={hideEmailFormBtn}>Cancel</button>
      </form>
    )
  }
}


export default EmailResumeForm
